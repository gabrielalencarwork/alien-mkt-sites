"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CameraRig() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate the body or a global proxy to create scrollable space
    document.body.style.height = "900vh"; // 9 portals

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrubbing
      }
    });

    const proxy = { z: 5 };
    
    // Camera travels from z=5 all the way to z=-800 (The final portal)
    tl.to(proxy, {
      z: -800, 
      ease: "none",
      onUpdate: () => {
        if (typeof window !== "undefined") {
          (window as any).cameraZ = proxy.z;
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      document.body.style.height = "auto";
    };
  }, []);

  useFrame((state) => {
    const targetZ = (typeof window !== "undefined" && (window as any).cameraZ) !== undefined 
      ? (window as any).cameraZ 
      : 5;
      
    // Smooth interpolation
    state.camera.position.z += (targetZ - state.camera.position.z) * 0.1;
  });

  return null;
}
