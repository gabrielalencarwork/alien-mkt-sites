"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import * as THREE from "three";

function Layer({ position, color, label }: { position: [number, number, number], color: string, label: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    // Floating animation
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * 2 + position[2]) * 0.2;
    
    // Scale on hover
    const targetScale = hovered ? 1.05 : 1;
    meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
    meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
    meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={[-Math.PI / 4, 0, 0]}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { setHover(false); document.body.style.cursor = 'auto'; }}
    >
      <planeGeometry args={[6, 4]} />
      <meshBasicMaterial 
        color={hovered ? "#00ff88" : color} 
        transparent 
        opacity={hovered ? 0.3 : 0.1} 
        side={THREE.DoubleSide} 
        depthWrite={false}
      />
      <Edges color={hovered ? "#ffffff" : color} scale={1.0} threshold={15} />
    </mesh>
  );
}

export default function Methodology({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle global rotation
    groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
  });

  return (
    <group position={position} ref={groupRef}>
      {/* Front Layer - UI */}
      <Layer position={[0, -1, 1.5]} color="#00ff88" label="UI/UX Layer" />
      
      {/* Middle Layer - Data/Tracking */}
      <Layer position={[0, 0, 0]} color="#0088ff" label="Tracking/Pixel" />
      
      {/* Back Layer - Backend/Performance */}
      <Layer position={[0, 1, -1.5]} color="#ff0088" label="Core/Performance" />
      
      {/* Particles/Data flowing between them could be added here */}
    </group>
  );
}
