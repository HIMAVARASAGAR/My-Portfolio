"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Footer.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

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