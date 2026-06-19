"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  uniform float uTime;
  uniform vec2 uMouse;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Deep diagonal saree drape folding math
    float timeFactor = uTime * 0.6;
    float diagonalFold = sin(pos.x * 0.25 - pos.y * 0.35 + timeFactor) * 0.95;
    float microWaves = cos(pos.x * 0.65 + pos.y * 0.45 + timeFactor * 1.6) * 0.25;
    float verticalHang = sin(pos.y * 0.15 + timeFactor * 0.3) * 0.2;

    // Smooth cursor wind push influence
    vec2 NDCmouse = uMouse * vec2(7.0, 4.5);
    float mouseDistance = distance(pos.xy, NDCmouse);
    float cursorWind = 0.0;
    if (mouseDistance < 5.0) {
      cursorWind = sin(mouseDistance * 1.5 - timeFactor * 3.5) * 0.45 * (1.0 - mouseDistance / 5.0);
    }

    pos.z += (diagonalFold + microWaves + verticalHang + cursorWind) * 0.95;
    vPosition = pos;

    // Calculate normal vector derivatives
    float dx = 0.25 * 0.95 * cos(position.x * 0.25 - position.y * 0.35 + timeFactor) - 0.65 * 0.25 * sin(position.x * 0.65 + position.y * 0.45 + timeFactor * 1.6);
    float dy = -0.35 * 0.95 * cos(position.x * 0.25 - position.y * 0.35 + timeFactor) - 0.45 * 0.25 * sin(position.x * 0.65 + position.y * 0.45 + timeFactor * 1.6) + 0.15 * 0.2 * cos(position.y * 0.15 + timeFactor * 0.3);
    
    vec3 tangent = vec3(1.0, 0.0, dx * 0.95);
    vec3 bitangent = vec3(0.0, 1.0, dy * 0.95);
    vNormal = normalize(cross(tangent, bitangent));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  uniform vec3 uColor;
  uniform float uTime;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(vec3(5.0, 5.0, 8.0) - vPosition);
    vec3 viewDir = normalize(vec3(0.0, 0.0, 10.0) - vPosition);

    // standard diffuse light
    float diff = max(dot(normal, lightDir), 0.0);

    // Saree gold zari borders (top and bottom border lines via UV coordinates)
    float borderSize = 0.07;
    bool isBorder = (vUv.y < borderSize) || (vUv.y > (1.0 - borderSize));
    
    vec3 baseColor = uColor;
    vec3 zariGold = vec3(0.92, 0.72, 0.15); // Authentic Indian Zari metallic gold

    if (isBorder) {
      // Simulate fine gold brocade stripes
      float stripe = step(0.55, sin(vUv.y * 220.0));
      baseColor = mix(zariGold, vec3(0.72, 0.52, 0.05), stripe * 0.35);

      // Gold border trim highlights
      float distToEdge = min(abs(vUv.y - borderSize), abs(vUv.y - (1.0 - borderSize)));
      if (distToEdge < 0.005) {
        baseColor = vec3(0.98, 0.85, 0.3);
      }
    }

    // Material reflections
    float glossiness = isBorder ? 50.0 : 25.0;
    float specIntensity = isBorder ? 1.4 : 0.75;
    vec3 specColor = isBorder ? vec3(1.0, 0.9, 0.5) : vec3(1.0, 0.85, 0.8);

    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfDir), 0.0), glossiness);

    // Fresnel edge sheen
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
    vec3 rimGlow = (isBorder ? vec3(1.0, 0.8, 0.3) : vec3(1.0, 0.45, 0.5)) * fresnel * 0.4;

    vec3 ambient = baseColor * 0.22;
    vec3 diffuseColor = baseColor * diff * 0.55;
    vec3 specularColor = specColor * spec * specIntensity;

    vec3 finalColor = ambient + diffuseColor + specularColor + rimGlow;

    // Output gamma correction
    gl_FragColor = vec4(pow(finalColor, vec3(0.85)), 1.0);
  }
`;

export function HeroThreeDBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseUniform = useRef(new THREE.Vector2(0, 0));

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    mouseUniform.current.set(x, y);
  };

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera - slightly angled for dramatic depth
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.5);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Plane mesh setup - angled slightly for a hanging drape feel
    const geometry = new THREE.PlaneGeometry(13.5, 9, 80, 60);

    // Uniforms mapping
    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: mouseUniform.current },
      uColor: { value: new THREE.Color("#880e1b") }, // Elegant crimson red base
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.z = -0.05; // slight angle to simulate authentic saree cross-drape
    scene.add(mesh);

    // Event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const tick = () => {
      const elapsed = clock.getElapsedTime();
      
      uniforms.uTime.value = elapsed;
      uniforms.uMouse.value.lerp(mouseUniform.current, 0.05); // smooth ripple drag
      
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden bg-[#020308] z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
