import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from 'gsap';

// Framer Motion variants for staggered text entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 }
  }
};

const itemVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

// Global styles needed for the text effect
const heroStyles = `
  .wireframe-text {
    position: absolute;
    top: 0; left: 0;
    color: transparent;
    -webkit-text-stroke: 1px var(--accent);
    opacity: 1; /* INCREASED VISIBILITY */
  }
  .solid-text {
    color: white;
    transition: opacity 0.3s;
  }
`;

export default function Hero() {
  const ref = useRef(null);
  const textRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse Motion Values for 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const transformX = useSpring(useTransform(x, [-1, 1], [-5, 5]));
  const transformY = useSpring(useTransform(y, [-1, 1], [5, -5]));

  // Effect to handle both 3D Tilt and Proximity Fade
  useEffect(() => {
    const textBlock = textRef.current;
    if (!textBlock) return;

    // Center coordinates and dimensions of the text block
    let center = { x: 0, y: 0 };
    let dim = { w: 0, h: 0 };
    const maxRadius = 250; // Max distance for full wireframe reveal (in pixels)

    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      
      // 1. 3D Tilt calculation
      x.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
      y.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
      
      // 2. Proximity Fade calculation
      const textRect = textBlock.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      const dx = mouseX - (textRect.left + textRect.width / 2);
      const dy = mouseY - (textRect.top + textRect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Map distance to opacity (1 = far away, 0 = close)
      const opacityTarget = gsap.utils.mapRange(0, maxRadius, 0, 1, distance);
      
      // Apply opacity fade to solid text layer
      gsap.to(textBlock.querySelectorAll('.solid-text'), {
        opacity: opacityTarget,
        duration: 0.1,
        ease: "none"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);


  return (
    <section
  id="home"
  className="h-screen flex flex-col justify-center items-center relative px-4 overflow-hidden"
  ref={ref}
    >
      {/* Inject Styles */}
      <style>{heroStyles}</style>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center z-10"
      >
        <p className="font-mono text-accent text-xs tracking-[0.3em] mb-6">ENGINEERING PORTFOLIO</p>
        
        <motion.div 
          ref={textRef} /* Reference for proximity calculation */
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            perspective: 1000, 
            x: transformX, 
            y: transformY,
            rotateX: useTransform(transformY, [5, -5], [-5, 5]),
            rotateY: useTransform(transformX, [-5, 5], [5, -5]),
          }}
          className="relative cursor-pointer"
        >
            {/* HIMA VARA - Line 1 */}
            <div className="overflow-hidden relative">
                <motion.h1 
                    variants={itemVariants} 
                    className="font-display text-[12vw] leading-[0.85] font-bold tracking-tighter mix-blend-difference"
                >
                    <span className="wireframe-text">HIMA VARA</span>
                    <span className="solid-text">HIMA VARA</span>
                </motion.h1>
            </div>
            
            {/* SAGAR - Line 2 (Offset/Shifting) */}
            <div className="overflow-hidden relative">
                <motion.h1 
                    variants={itemVariants}
                    className="font-display text-[12vw] leading-[0.85] font-bold tracking-tighter ml-[15vw] text-accent"
                >
                    <span className="wireframe-text" style={{ WebkitTextStroke: '1px var(--accent)' }}>SAGAR</span>
                    <span className="solid-text text-white">SAGAR</span>
                </motion.h1>
            </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-8 max-w-md mx-auto text-white-400 font-sans text-sm md:text-base leading-relaxed"
        >
            Constructing the bridge between silicon logic and human emotion.
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4 font-mono text-xs text-gray-500"
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </motion.div>
    </section>
  );
}