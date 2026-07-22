"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export default function Portal({ position, children, color = "#ffffff" }: any) {
  const group = useRef<THREE.Group>(null);
  const htmlRef = useRef<HTMLDivElement>(null);

  useFrame((state) => {
    if (group.current && htmlRef.current) {
      const camera = state.camera;
      const distance = camera.position.z - group.current.position.z;
      
      // Calculate opacity based on distance
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
      
      // THE ULTIMATE CLICK FIX:
      // 1. Physically remove it from rendering when invisible using display: none
      // 2. Enable pointer-events: auto ONLY when fully opaque
      if (opacity < 0.05) {
        htmlRef.current.style.display = "none";
        htmlRef.current.style.pointerEvents = "none";
      } else {
        htmlRef.current.style.display = "flex";
        htmlRef.current.style.pointerEvents = opacity > 0.8 ? "auto" : "none";
      }
    }
  });

  return (
    <group ref={group} position={position}>
      {/* 3D Portal Ring */}
      <mesh position={[0, 0, 0]}>
        <ringGeometry args={[10, 10.5, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
      
      {/* HTML Overlay */}
      {/* pointerEvents: "none" on Html wrapper ensures Drei doesn't block the screen */}
      <Html center style={{ pointerEvents: "none" }}>
        <div 
          ref={htmlRef} 
          className="portal-content w-[100vw] px-4 md:px-12 flex-col items-center justify-center transition-opacity duration-100"
          style={{ display: "none", pointerEvents: "none" }}
        >
          {children}
        </div>
      </Html>
    </group>
  );
}
