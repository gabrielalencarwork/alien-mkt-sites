"use client";

import dynamic from "next/dynamic";

// Load the 3D scene dynamically to avoid SSR issues with Three.js
const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 3D Canvas Background & Interactive Portals */}
      <Scene />
    </main>
  );
}
