"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface PortalProps {
  position: [number, number, number];
  color?: string;
  children: React.ReactNode;
}

export default function Portal({ position, color = "#333333", children }: PortalProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const htmlRef = useRef<HTMLDivElement>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Slow rotation of the torus ring
    meshRef.current.rotation.z -= 0.002;
    
    // Calculate distance from camera to fade in/out the HTML content
    const distance = state.camera.position.z - position[2];
    
    if (htmlRef.current) {
      // Fade in from 50 to 20, stay solid from 20 to -20, fade out from -20 to -50
      let opacity = 0;
      if (distance > -50 && distance < 50) {
        if (distance > 20) {
          opacity = 1 - (distance - 20) / 30;
        } else if (distance >= -20) {
          opacity = 1;
        } else {
          opacity = 1 - (-20 - distance) / 30;
        }
      }
      
      htmlRef.current.style.opacity = opacity.toString();
      // Only allow clicks when fully visible to prevent invisible elements blocking the screen
      htmlRef.current.style.pointerEvents = opacity > 0.8 ? "auto" : "none";
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <torusGeometry args={[8, 0.03, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
      
      <Html center zIndexRange={[100, 0]}>
        <div ref={htmlRef} className="portal-content w-[100vw] px-4 md:px-12 flex flex-col items-center justify-center transition-opacity duration-100">
          {children}
        </div>
      </Html>
    </group>
  );
}
