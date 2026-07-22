"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CameraRig() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate the body or a global proxy to create scrollable space
    document.body.style.height = "1000vh"; // 10 portals

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrubbing
      }
    });

    const proxy = { z: 5 };
    
    // Camera travels from z=5 all the way to z=-900 (The final portal)
    tl.to(proxy, {
      z: -900, 
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

    // UI Sync Logic: Sync native HTML overlays with the 3D camera
    if (typeof document !== "undefined") {
      for (let i = 0; i <= 9; i++) {
        const el = document.getElementById(`portal-ui-${i}`);
        if (el) {
          const portalZ = -i * 100;
          const distance = state.camera.position.z - portalZ;
          
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
          
          el.style.opacity = opacity.toString();
          
          if (opacity < 0.05) {
            el.style.visibility = "hidden";
            el.style.pointerEvents = "none";
          } else {
            el.style.visibility = "visible";
            // Allow clicking only when the section is highly visible
            el.style.pointerEvents = opacity > 0.8 ? "auto" : "none";
          }
        }
      }
      
      const arrowEl = document.getElementById('scroll-arrow');
      if (arrowEl) {
        // Fade out the arrow when reaching the final section
        const arrowOpacity = state.camera.position.z < -850 ? 0 : 1;
        arrowEl.style.opacity = arrowOpacity.toString();
        arrowEl.style.pointerEvents = arrowOpacity > 0.5 ? "auto" : "none";
      }
    }
  });

  return null;
}
