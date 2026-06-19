"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, Move, Zap } from "lucide-react";

interface FabricPreset {
  name: string;
  description: string;
  color: string; // Hex representation
  sheenColor: string;
  speed: number;
  amplitude: number;
  glossiness: number;
  tags: string[];
}

const FABRIC_PRESETS: Record<string, FabricPreset> = {
  kanchipuram: {
    name: "Kanchipuram Silk",
    description: "Known for its heavy weight, rich zari border, and opulent gold thread weave. Represents pure royal heritage.",
    color: "#880e1b", // Deep Royal Crimson Ruby Red
    sheenColor: "#fcd34d", // Gold
    speed: 1.2,
    amplitude: 0.65,
    glossiness: 45.0,
    tags: ["Handloom", "Zari Border", "Heavy Silk"],
  },
  banarasi: {
    name: "Banarasi Georgette",
    description: "Finely woven light georgette fabric, featuring delicate foliage patterns and elegant flowy drape.",
    color: "#0a2540", // Deep Royal Indigo/Teal
    sheenColor: "#38bdf8", // Sky Blue
    speed: 1.8,
    amplitude: 0.85,
    glossiness: 25.0,
    tags: ["Lightweight", "Intricate", "Flowing"],
  },
  organza: {
    name: "Organza Crystal",
    description: "A thin, plain weave, sheer fabric made from synthetic filament fibers that reflects light brilliantly.",
    color: "#f97316", // Sunset Coral Orange
    sheenColor: "#fef08a", // Soft Yellow
    speed: 2.2,
    amplitude: 0.5,
    glossiness: 80.0,
    tags: ["Translucent", "High-Shine", "Structured"],
  },
  crepe: {
    name: "Mysore Crepe",
    description: "Luxurious single-cocoon silk with a slightly crinkled texture, offering an incomparable smooth fall and luster.",
    color: "#ca8a04", // Mustard / Pure Gold
    sheenColor: "#ffffff", // Pure White reflection
    speed: 1.0,
    amplitude: 0.75,
    glossiness: 35.0,
    tags: ["Lustrous", "Smooth Fall", "Satin Finish"],
  },
};

// Shader code for waving plane and silk sheen lighting
const vertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uWaveSpeed;
  uniform float uWaveAmplitude;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Procedural wave dynamics for realistic silk cloth
    float timeFactor = uTime * uWaveSpeed;
    float waveX1 = sin(pos.x * 0.45 + timeFactor) * 0.75;
    float waveY1 = cos(pos.y * 0.35 + timeFactor * 0.8) * 0.45;
    float waveX2 = sin(pos.x * 0.95 + pos.y * 0.5 + timeFactor * 1.5) * 0.25;
    
    // Ripple responsive to cursor location
    float mouseDistance = distance(pos.xy, uMouse * vec2(6.0, 4.0));
    float cursorRipple = 0.0;
    if (mouseDistance < 3.5) {
      cursorRipple = sin(mouseDistance * 3.0 - timeFactor * 4.0) * 0.35 * (1.0 - mouseDistance / 3.5);
    }

    pos.z += (waveX1 + waveY1 + waveX2 + cursorRipple) * uWaveAmplitude;
    vPosition = pos;

    // Calculate analytical normal vector
    float dx = 0.45 * 0.75 * cos(position.x * 0.45 + timeFactor) + 0.95 * 0.25 * cos(position.x * 0.95 + position.y * 0.5 + timeFactor * 1.5);
    float dy = 0.35 * 0.45 * -sin(position.y * 0.35 + timeFactor * 0.8) + 0.5 * 0.25 * cos(position.x * 0.95 + position.y * 0.5 + timeFactor * 1.5);
    
    vec3 tangent = vec3(1.0, 0.0, dx * uWaveAmplitude);
    vec3 bitangent = vec3(0.0, 1.0, dy * uWaveAmplitude);
    vNormal = normalize(cross(tangent, bitangent));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  uniform vec3 uColor;
  uniform vec3 uSheenColor;
  uniform float uGlossiness;
  uniform vec3 uLightPos;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(uLightPos - vPosition);
    vec3 viewDir = normalize(vec3(0.0, 0.0, 10.0) - vPosition);

    // standard Lambertian diffuse
    float diff = max(dot(normal, lightDir), 0.0);

    // Blinn-Phong specular highlight for silk luster
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfDir), 0.0), uGlossiness);

    // Fresnel glow mapping (silk edges have anisotropic bright fiber reflects)
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);

    // Color compositing
    vec3 ambient = uColor * 0.25;
    vec3 diffuseColor = uColor * diff * 0.65;
    vec3 specularColor = uSheenColor * spec * 0.9;
    vec3 fresnelGlow = uSheenColor * fresnel * 0.45;

    vec3 finalColor = ambient + diffuseColor + specularColor + fresnelGlow;

    // Apply gamma correction
    gl_FragColor = vec4(pow(finalColor, vec3(0.9)), 1.0);
  }
`;

export function SilkShowcaseCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activePresetKey, setActivePresetKey] = useState<string>("kanchipuram");
  const preset = FABRIC_PRESETS[activePresetKey];

  const mouseUniform = useRef(new THREE.Vector2(0, 0));
  const uniformsRef = useRef<{
    uTime: { value: number };
    uColor: { value: THREE.Color };
    uSheenColor: { value: THREE.Color };
    uMouse: { value: THREE.Vector2 };
    uWaveSpeed: { value: number };
    uWaveAmplitude: { value: number };
    uGlossiness: { value: number };
    uLightPos: { value: THREE.Vector3 };
  } | null>(null);

  // Mouse hover event handler to set coordinate values in NDC
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    mouseUniform.current.set(x, y);
  };

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 450;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.z = 9.5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Plane mesh setup
    const geometry = new THREE.PlaneGeometry(12, 8, 80, 60);

    // Initial uniforms object mapping React preset state
    const currentPreset = FABRIC_PRESETS[activePresetKey];
    const uniforms = {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(currentPreset.color) },
      uSheenColor: { value: new THREE.Color(currentPreset.sheenColor) },
      uMouse: { value: mouseUniform.current },
      uWaveSpeed: { value: currentPreset.speed },
      uWaveAmplitude: { value: currentPreset.amplitude },
      uGlossiness: { value: currentPreset.glossiness },
      uLightPos: { value: new THREE.Vector3(5, 5, 8) },
    };
    uniformsRef.current = uniforms;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const tick = () => {
      const elapsed = clock.getElapsedTime();
      
      // Update uniform values
      uniforms.uTime.value = elapsed;
      uniforms.uMouse.value.lerp(mouseUniform.current, 0.08); // smooth damp mouse ripple
      
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 450;
      
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  // Update uniforms when active preset changes
  useEffect(() => {
    if (uniformsRef.current) {
      uniformsRef.current.uColor.value.set(preset.color);
      uniformsRef.current.uSheenColor.value.set(preset.sheenColor);
      uniformsRef.current.uWaveSpeed.value = preset.speed;
      uniformsRef.current.uWaveAmplitude.value = preset.amplitude;
      uniformsRef.current.uGlossiness.value = preset.glossiness;
    }
  }, [activePresetKey, preset]);

  return (
    <div className="w-full grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center py-10">
      {/* 3D Canvas Visualizer */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => mouseUniform.current.set(0, 0)}
        className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 border border-white/10 group cursor-grab active:cursor-grabbing shadow-[0_30px_70px_rgba(15,23,42,0.4)]"
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
        
        {/* Decorative Grid overlays */}
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950 via-transparent to-transparent pointer-events-none" />
        
        {/* Floating Instruction overlay */}
        <div className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 text-xs tracking-wider select-none pointer-events-none">
          <Move className="w-3.5 h-3.5 text-accent animate-pulse" />
          <span>Move cursor to ripple fabric</span>
        </div>

        <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-[10px] font-bold uppercase tracking-widest select-none pointer-events-none">
          <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
          <span>3D WebGL Simulation</span>
        </div>
      </div>

      {/* Control Pane & Info */}
      <div className="space-y-6 lg:pl-4">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">Fabric Explorer</span>
          </div>
          <h3 className="font-headline text-3xl md:text-4xl text-foreground font-black leading-tight">
            Feel the Luxury of Premium Weaves
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Our master looms capture the perfect harmony of thread count, weight, and luster. Choose a weave below to interactively explore its drape, metallic gold reflection (Zari), and flow qualities in real-time.
          </p>
        </div>

        {/* Fabric Presets Selectors */}
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(FABRIC_PRESETS).map(([key, item]) => {
            const isActive = activePresetKey === key;
            return (
              <button
                key={key}
                onClick={() => setActivePresetKey(key)}
                className={`flex flex-col items-start text-left p-4 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "border-accent bg-accent/5 shadow-md shadow-accent/5 -translate-y-1"
                    : "border-border/30 hover:border-border/80 hover:bg-secondary/20"
                }`}
              >
                <div className="flex items-center gap-2 w-full justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                    {item.name.split(" ")[0]}
                  </span>
                  <div 
                    className="w-3.5 h-3.5 rounded-full border border-white/30"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
                <span className="text-[10px] text-muted-foreground mt-2 line-clamp-1">
                  {item.tags[0]} • {item.tags[1]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Preset Details */}
        <div className="rounded-2xl border border-border/30 bg-card/40 p-5 space-y-4 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300">
          <div>
            <h4 className="font-headline text-2xl text-foreground font-semibold">{preset.name}</h4>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              {preset.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-border/20">
            {preset.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2.5 py-0.5 rounded-full bg-secondary/50 border border-border/30 text-foreground/80 text-[10px] uppercase font-bold tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
