"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Atmosphere.module.css";

export default function Atmosphere() {
  const meshRef = useRef(null);

  useEffect(() => {
    // Subtle breathing animation for the gradient mesh
    const ctx = gsap.context(() => {
      gsap.to(meshRef.current, {
        opacity: 0.8,
        scale: 1.1,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.atmosphere}>
      <div className={styles.grain} />
      <div ref={meshRef} className={styles.mesh} />
      <div className={styles.vignette} />
    </div>
  );
}