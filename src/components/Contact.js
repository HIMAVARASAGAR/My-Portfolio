"use client";

import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { ScrollContext } from "@/app/page";
import NorrisText from "./NorrisText";
import styles from "./Contact.module.css";

export default function Contact() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const { masterTimeline } = useContext(ScrollContext);

  useEffect(() => {
    if (!masterTimeline) return;

    const ctx = gsap.context(() => {
      const tl = masterTimeline;
      const start = 0.92;

      // Entrance (Explicit fromTo)
      tl.fromTo(sectionRef.current, 
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.01 },
        start
      );

      tl.fromTo(containerRef.current, 
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.04,
          ease: "power2.out",
        },
        start + 0.01
      );

      // Remains visible until end of scroll track
    }, sectionRef);

    return () => ctx.revert();
  }, [masterTimeline]);

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