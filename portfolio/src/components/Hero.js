"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NorrisText from "./NorrisText";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Massive cinematic fade out as we scroll away
      gsap.to(containerRef.current, {
        opacity: 0,
        y: -150,
        filter: "blur(40px)",
        scale: 0.9,
        ease: "power2.in",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });

      // Subtle parallax for the text block
      gsap.to(`.${styles.textBlock}`, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={sectionRef} id="hero">
      <div className={styles.container} ref={containerRef}>
        <div className={styles.textBlock}>
          <div className={styles.label}>
            <span className={styles.line} />
            <span className={styles.labelText}>Electronics & AI Systems</span>
          </div>
          
          <h1 className={styles.title}>
            <NorrisText text="Intelligence" tag="span" />
            <br />
            <span className={styles.outline}>in Motion</span>
            <span className={styles.dot}>.</span>
          </h1>

          <p className={styles.deck}>
            Kaki Himavara Sagar — Engineering graduate from NIT Calicut. 
            Designing at the intersection of signal processing, VLSI, and intelligent agents.
          </p>
        </div>

        <div className={styles.scrollHint}>
          <span className={styles.scrollText}>Scroll to explore</span>
          <div className={styles.scrollLine} />
        </div>
      </div>
    </section>
  );
}