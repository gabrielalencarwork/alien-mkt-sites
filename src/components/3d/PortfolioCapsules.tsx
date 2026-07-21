"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

function Capsule({ position, color, title, metrics }: { position: [number, number, number], color: string, title: string, metrics: string[] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Base floating animation when not active
    if (!active) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.5;
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.005;
    }

    // Target rotations and positions based on active state
    const targetRotY = active ? 0 : meshRef.current.rotation.y;
    const targetRotX = active ? 0 : meshRef.current.rotation.x;
    const targetScale = hovered || active ? 1.1 : 1;
    
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    
    if (active) {
      meshRef.current.rotation.y += (0 - meshRef.current.rotation.y) * 0.1;
      meshRef.current.rotation.x += (0 - meshRef.current.rotation.x) * 0.1;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={(e) => { e.stopPropagation(); setActive(!active); }}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { setHover(false); document.body.style.cursor = 'auto'; }}
    >
      <capsuleGeometry args={[1, 2, 32, 32]} />
      <meshPhysicalMaterial 
        color={color}
        transmission={0.9} 
        opacity={1}
        metalness={0.1}
        roughness={0.1}
        ior={1.5}
        thickness={2}
        envMapIntensity={2}
        clearcoat={1}
      />
      
      {/* HTML Overlay that appears when clicked */}
      <Html 
        position={[1.5, 0, 0]} 
        center 
        style={{ 
          opacity: active ? 1 : 0, 
          transition: "opacity 0.3s",
          pointerEvents: active ? "auto" : "none"
        }}
      >
        <div className="glass-panel p-6 rounded-2xl w-64 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            {metrics.map((metric, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-[#00ff88]">✓</span> {metric}
              </li>
            ))}
          </ul>
        </div>
      </Html>
    </mesh>
  );
}

export default function PortfolioCapsules({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <Capsule 
        position={[-3, 0, 0]} 
        color="#00ff88" 
        title="Clínica Positive" 
        metrics={["+340% Conversão WhatsApp", "Carregamento em 0.8s", "Top 3 Google Maps"]} 
      />
      <Capsule 
        position={[0, 0, -2]} 
        color="#0088ff" 
        title="Advocacia Tributária" 
        metrics={["Layout Premium", "Pixel Avançado", "Design Responsivo"]} 
      />
      <Capsule 
        position={[3, 0, 0]} 
        color="#ff0088" 
        title="Arquitetura Alto Padrão" 
        metrics={["Galeria WebGL", "SEO Otimizado", "Agenda Cheia"]} 
      />
    </group>
  );
}
