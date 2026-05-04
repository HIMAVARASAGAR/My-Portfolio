"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.7,
    });
    lenisRef.current = lenis;
    window.lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    setTimeout(() => ScrollTrigger.refresh(), 200);
  }, []);

  return (
    <>
      <CustomCursor />
      <Atmosphere />
      <div className="noise" aria-hidden="true" />

      {isLoading && <Loader onComplete={handleLoadingComplete} />}

      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <ProjectsGallery />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
