"use client";

import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { ScrollContext } from "@/app/page";
import styles from "./Footer.module.css";

export default function Footer() {
  const footerRef = useRef(null);
  const { masterTimeline } = useContext(ScrollContext);

  useEffect(() => {
    if (!masterTimeline) return;

    const ctx = gsap.context(() => {
      const tl = masterTimeline;
      const start = 0.98;

      tl.fromTo(footerRef.current, 
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.02 },
        start
      );
    }, footerRef);

    return () => ctx.revert();
  }, [masterTimeline]);

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.copy}>© {new Date().getFullYear()} KHS</p>
          </div>

          <div className={styles.center}>
            <p className={styles.built}>Built for Excellence</p>
          </div>

          <div className={styles.right}>
            <button 
              className={styles.backToTop} 
              onClick={() => window.lenis?.scrollTo(0, { duration: 2 })}
              data-cursor="lg"
            >
              Take me back ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}