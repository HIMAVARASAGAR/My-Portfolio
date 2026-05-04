"use client";

import { useEffect, useRef, useState, useCallback, createContext, useContext } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import Atmosphere from "@/components/Atmosphere";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectsGallery from "@/components/ProjectsGallery";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

// Context to share the master timeline among components
export const ScrollContext = createContext({
  masterTimeline: null,
  registerComponent: () => {},
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollTrackRef = useRef(null);
  const stickyRef = useRef(null);
  const [masterTimeline, setMasterTimeline] = useState(null);

  // High-performance velocity tracking for Kinetic Lean
  useEffect(() => {
    if (isLoading) return;

    const proxy = { skew: 0 };
    const skewSetter = gsap.quickSetter(stickyRef.current, "skewY", "deg");
    const clamp = gsap.utils.clamp(-10, 10); // Max 10 deg lean

    const scrollTrigger = ScrollTrigger.create({
      trigger: scrollTrackRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const skew = clamp(self.getVelocity() / -300);
        // Only update if change is significant to save cycles
        if (Math.abs(skew - proxy.skew) > 0.01) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew)
          });
        }
      }
    });

    return () => scrollTrigger.kill();
  }, [isLoading]);

  // Lenis initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.7,
    });
    window.lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // Initialize Master Timeline
  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollTrackRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          markers: false,
        },
      });
      setMasterTimeline(tl);
    }, scrollTrackRef);

    return () => ctx.revert();
  }, [isLoading]);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <ScrollContext.Provider value={{ masterTimeline }}>
      <CustomCursor />
      <Atmosphere />
      <div className="noise" aria-hidden="true" />

      {isLoading && <Loader onComplete={handleLoadingComplete} />}

      <main 
        ref={scrollTrackRef} 
        style={{ 
          visibility: isLoading ? "hidden" : "visible",
          height: "1200vh", // Expanded scroll track for a slower, more epic pace
          position: "relative"
        }}
      >
        {/* Weighted Content Anchors */}
        <div id="hero" style={{ position: "absolute", top: "0%" }} />
        <div id="about" style={{ position: "absolute", top: "12%" }} />
        <div id="skills" style={{ position: "absolute", top: "27%" }} />
        <div id="projects" style={{ position: "absolute", top: "42%" }} />
        <div id="experience" style={{ position: "absolute", top: "65%" }} />
        <div id="contact" style={{ position: "absolute", top: "92%" }} />

        <div 
          ref={stickyRef}
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            overflow: "hidden"
          }}
        >
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <ProjectsGallery />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </main>
    </ScrollContext.Provider>
  );
}
