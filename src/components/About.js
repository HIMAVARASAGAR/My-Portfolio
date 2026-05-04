"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NorrisText from "./NorrisText";
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const bio = "I am an Electronics and Communication Engineering graduate from NIT Calicut. My work bridges theory and implementation—from graphene-based THz antenna design to multi-agent AI systems, frontend architecture, and hardware circuits built from first principles.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray(`.${styles.word}`);
      
      // Materialize words from the atmosphere
      gsap.fromTo(words, 
        { 
          opacity: 0, 
          filter: "blur(20px)", 
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          scale: 1,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            end: "bottom 35%",
            scrub: 1.2,
          }
        }
      );

      // Deep parallax and fade out as section leaves
      gsap.to(containerRef.current, {
        opacity: 0.2,
        y: -100,
        filter: "blur(15px)",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 60%",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <section className={styles.about} id="about">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.label}>
              <span className={styles.line} />
              <NorrisText text="The Profile" tag="span" className={styles.labelText} />
            </div>

            <p className={styles.bigText} ref={textRef}>
              {bio.split(" ").map((word, i) => (
                <span key={i} className={styles.word}>
                  {word}{" "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}