"use client";

import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { ScrollContext } from "@/app/page";
import NorrisText from "./NorrisText";
import styles from "./Hero.module.css";

export default function Hero() {
  const sectionRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const taglineRef = useRef(null);
  const hintRef = useRef(null);

  const { masterTimeline } = useContext(ScrollContext);

  useEffect(() => {
    // 1. One-time entrance animation (Intro)
    const introCtx = gsap.context(() => {
      gsap.fromTo([firstNameRef.current, lastNameRef.current, taglineRef.current, hintRef.current], 
        { 
          y: 100, 
          opacity: 0, 
          clipPath: "inset(100% 0 0 0)" // Hidden behind bottom edge
        },
        { 
          y: 0, 
          opacity: 1, 
          clipPath: "inset(0% 0 0 0)",
          stagger: 0.1,
          duration: 1.4,
          ease: "expo.out" 
        }
      );
    }, sectionRef);

    // 2. Scroll-driven choreography
    if (!masterTimeline) return;

    const scrollCtx = gsap.context(() => {
      const tl = masterTimeline;
      const start = 0;
      
      // Kinetic Exit: Panel Slicing
      tl.fromTo(firstNameRef.current, 
        { y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)" },
        { y: -100, opacity: 0, clipPath: "inset(0 0 100% 0)", duration: 0.05, ease: "power4.in" },
        start + 0.04
      );

      tl.fromTo(lastNameRef.current, 
        { y: 0, opacity: 1, scale: 1, clipPath: "inset(0% 0 0 0)" },
        { 
          y: -50, 
          opacity: 0, 
          scale: 1.1,
          letterSpacing: "0.2em",
          clipPath: "inset(0 0 100% 0)", 
          duration: 0.08, 
          ease: "power4.inOut" 
        },
        start + 0.04
      );

      tl.fromTo(taglineRef.current, 
        { y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)" },
        { y: 100, opacity: 0, clipPath: "inset(100% 0 0 0)", duration: 0.05, ease: "power4.in" },
        start + 0.04
      );

      tl.fromTo(hintRef.current, 
        { opacity: 1, y: 0 },
        { opacity: 0, y: 50, duration: 0.02 },
        start
      );

      tl.to(sectionRef.current, {
        autoAlpha: 0,
        duration: 0.01
      }, start + 0.11);

    }, sectionRef);

    return () => {
      introCtx.revert();
      if (scrollCtx) scrollCtx.revert();
    };
  }, [masterTimeline]);

  return (
    <section className={styles.hero} ref={sectionRef} id="hero">
      <div className={styles.container}>
        <div className={styles.nameWrapper}>
          <div className={styles.firstName} ref={firstNameRef} style={{ opacity: 0 }}>
            Kaki Himavara
          </div>

          <h1 className={styles.lastName} ref={lastNameRef} style={{ opacity: 0 }}>
            <NorrisText text="SAGAR" tag="span" />
            <span className={styles.dot}>.</span>
          </h1>

          <div className={styles.tagline} ref={taglineRef} style={{ opacity: 0 }}>
            Engineer & Designer
          </div>
        </div>

        <div className={styles.scrollHint} ref={hintRef} style={{ opacity: 0 }}>
          <span className={styles.scrollText}>Scroll to explore</span>
          <div className={styles.scrollLine} />
        </div>
      </div>
    </section>
  );
}