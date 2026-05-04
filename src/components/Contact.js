"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NorrisText from "./NorrisText";
import styles from "./Contact.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the final destination
      gsap.fromTo(containerRef.current, 
        { opacity: 0, filter: "blur(20px)", scale: 0.98 },
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "center 50%",
            scrub: 1,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.contact} id="contact" ref={sectionRef}>
      <div className="container" ref={containerRef}>
        <div className={styles.content}>
          <div className={styles.label}>
            <span className={styles.line} />
            <NorrisText text="Connect" tag="span" className={styles.labelText} />
          </div>

          <h2 className={styles.title}>
            Let&apos;s build the<br />
            next generation<span>.</span>
          </h2>

          <div className={styles.actions}>
            <a href="mailto:himavarasagar6675@gmail.com" className={styles.mainEmail} data-cursor="xl">
              himavarasagar6675@gmail.com
            </a>
            
            <div className={styles.socials}>
              <a href="https://linkedin.com/in/kakihimavarasagar" target="_blank" rel="noopener noreferrer" className={styles.link} data-cursor="lg">LinkedIn</a>
              <span className={styles.sep}>/</span>
              <a href="https://github.com/kakihimavarasagar" target="_blank" rel="noopener noreferrer" className={styles.link} data-cursor="lg">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}