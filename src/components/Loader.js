"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Loader.module.css";

export default function Loader({ onComplete }) {
  const wrapperRef = useRef(null);
  const counterRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const counter = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        // Reveal animation
        gsap.to(wrapperRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          onComplete: () => onComplete(),
        });
      },
    });

    tl.to(counter, {
      val: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.floor(counter.val);
        }
      },
    }).to(
      fillRef.current,
      {
        width: "100%",
        duration: 2.2,
        ease: "power2.inOut",
      },
      "<"
    );

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div ref={wrapperRef} className={styles.loader}>
      <div className={styles.content}>
        <p className={styles.greeting}>PORTFOLIO</p>
        <div ref={counterRef} className={styles.counter}>0</div>
        <div className={styles.bar}>
          <div ref={fillRef} className={styles.fill} />
        </div>
      </div>

      {/* Corner marks */}
      <span className={`${styles.corner} ${styles.tl}`} />
      <span className={`${styles.corner} ${styles.tr}`} />
      <span className={`${styles.corner} ${styles.bl}`} />
      <span className={`${styles.corner} ${styles.br}`} />
    </div>
  );
}
