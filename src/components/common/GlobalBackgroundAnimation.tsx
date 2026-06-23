"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function GlobalBackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollYRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 15;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true, // Transparent background to blend with page theme
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Create 3D Objects
    // A. Elegant Silk Threads (Flowing lines)
    const threadCount = 4;
    const threadSegments = 100;
    const threads: {
      line: THREE.Line;
      geometry: THREE.BufferGeometry;
      positions: Float32Array;
      phase: number;
      speed: number;
      offsetY: number;
    }[] = [];

    const threadMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color("#F59E0B"), // Brighter amber/gold thread color
      transparent: true,
      opacity: 0.80,
      blending: THREE.NormalBlending,
    });

    for (let i = 0; i < threadCount; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array((threadSegments + 1) * 3);
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const line = new THREE.Line(geometry, threadMaterial);
      scene.add(line);

      threads.push({
        line,
        geometry,
        positions,
        phase: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.3,
        offsetY: -3 + i * 2, // spread threads vertically
      });
    }

    // B. Shimmering Gold Dust (Particle system)
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds: number[] = [];
    const particlePhases: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Spread particles across 3D space
      particlePositions[i * 3] = (Math.random() - 0.5) * 32; // X
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20; // Y
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z

      particleSpeeds.push(0.05 + Math.random() * 0.1);
      particlePhases.push(Math.random() * Math.PI * 2);
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    // Create custom soft circular particle texture
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.5, "rgba(202, 138, 4, 0.6)");
      grad.addColorStop(1, "rgba(202, 138, 4, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color("#FBBF24"), // Brighter light gold
      size: 0.20,
      transparent: true,
      opacity: 0.95,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Interaction Handlers
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates: -1 to 1
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // 6. Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const tick = () => {
      const elapsed = clock.getElapsedTime();
      
      // Target mouse lerping
      const targetMouseX = mouseRef.current.x * 3;
      const targetMouseY = mouseRef.current.y * 2;

      // Scroll factor influences Y drift
      const scrollFactor = scrollYRef.current * 0.005;

      // Update silk threads pathing
      threads.forEach((t) => {
        const positions = t.positions;
        const phase = t.phase + elapsed * t.speed;

        for (let j = 0; j <= threadSegments; j++) {
          const u = j / threadSegments;
          // X goes from left side of viewport to right side
          const x = (u - 0.5) * 32;

          // Compute wavy, flowing Y height
          const wave1 = Math.sin(x * 0.15 + phase) * 2.2;
          const wave2 = Math.cos(x * 0.35 - phase * 0.7) * 0.8;
          
          // Influence from mouse hover: slight displacement near cursor
          const distToMouse = Math.abs(x - targetMouseX);
          const mousePush = distToMouse < 6 ? Math.sin((6 - distToMouse) * 0.5) * targetMouseY * 0.4 : 0;

          const y = t.offsetY + wave1 + wave2 + mousePush - (scrollFactor * 0.1);
          const z = Math.sin(x * 0.1 + phase * 0.5) * 3;

          positions[j * 3] = x;
          positions[j * 3 + 1] = y;
          positions[j * 3 + 2] = z;
        }
        t.geometry.attributes.position.needsUpdate = true;
      });

      // Update gold dust particles positions
      const positions = particlePositions;
      for (let i = 0; i < particleCount; i++) {
        // Slow float up
        positions[i * 3 + 1] += particleSpeeds[i] * 0.15; // float up Y
        // Horizontal drift sway
        positions[i * 3] += Math.sin(elapsed * 0.2 + particlePhases[i]) * 0.008; // X sway

        // Interactive mouse gravity drift
        const dx = positions[i * 3] - targetMouseX;
        const dy = positions[i * 3 + 1] - targetMouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 8) {
          // Push particles slightly away or drag along
          positions[i * 3] += (dx / dist) * 0.005;
          positions[i * 3 + 1] += (dy / dist) * 0.005;
        }

        // Reset if particles drift out of vertical viewport bounds
        if (positions[i * 3 + 1] > 12) {
          positions[i * 3 + 1] = -12;
          positions[i * 3] = (Math.random() - 0.5) * 32;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Render
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    // 7. Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 8. Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      // Clean up buffers & assets
      threads.forEach((t) => {
        t.geometry.dispose();
      });
      threadMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-95"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
