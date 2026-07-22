"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Portal({ position, color = "#ffffff" }: any) {
  const group = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state) => {
    if (group.current && materialRef.current) {
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
      
      // Update the 3D ring opacity to be very subtle (max 15%)
      materialRef.current.opacity = opacity * 0.15;
    }
  });

  return (
    <group ref={group} position={position}>
      {/* 3D Portal Ring Only */}
      <mesh position={[0, 0, 0]}>
        <ringGeometry args={[10, 10.5, 64]} />
        <meshBasicMaterial ref={materialRef} color={color} transparent opacity={0} />
      </mesh>
    </group>
  );
}
