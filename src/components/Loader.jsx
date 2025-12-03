// src/components/Loader.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function Loader({ onComplete }) {
  const canvasRef = useRef(null);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const notifiedRef = useRef(false); // make sure we call onComplete only once

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Canvas size
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Fixed design space for HS.
    const drawWidth = 350;
    const drawHeight = 180;

    const ctx = canvas.getContext("2d");

    // --- Offscreen: draw HS + dot ---
    const off = document.createElement("canvas");
    off.width = drawWidth;
    off.height = drawHeight;
    const octx = off.getContext("2d");

    octx.clearRect(0, 0, drawWidth, drawHeight);
    octx.textAlign = "left";
    octx.textBaseline = "middle";
    octx.font = "bold 80px 'Syne', sans-serif";

    const hsText = "HS";
    const hsWidth = octx.measureText(hsText).width;
    const hsX = drawWidth / 2 - hsWidth / 2 - 10;

    // HS (white)
    octx.fillStyle = "#ffffff";
    octx.fillText(hsText, hsX, drawHeight / 2);

    // dot (black, slightly lower)
    const dotR = 6;
    const dotX = hsX + hsWidth + 10;
    const dotY = drawHeight / 2 + 16;
    octx.fillStyle = "#1a1a1a";
    octx.beginPath();
    octx.arc(dotX, dotY, dotR, 0, Math.PI * 2);
    octx.fill();

    const imageData = octx.getImageData(0, 0, drawWidth, drawHeight);
    const data = imageData.data;

    const particles = [];
    const gap = 2;
    let offsetX = (width - drawWidth) / 2;
    let offsetY = (height - drawHeight) / 2;
    const dispersalFactor = 8;

    for (let y = 0; y < drawHeight; y += gap) {
      for (let x = 0; x < drawWidth; x += gap) {
        const idx = (y * drawWidth + x) * 4;
        const a = data[idx + 3];
        if (a <= 100) continue;

        const r = data[idx];
        const g = data[idx + 1];
        const isWhite = r > 200 && g > 200;

        particles.push({
          x:
            Math.random() * width * dispersalFactor -
            width * (dispersalFactor / 2 - 0.5),
          y:
            Math.random() * height * dispersalFactor -
            height * (dispersalFactor / 2 - 0.5),
          tx: x + offsetX,
          ty: y + offsetY,
          color: isWhite ? "#ffffff" : "#1a1a1a",
          size: isWhite ? 0.9 : 1.5,
        });
      }
    }

    let frameId;
    const lerpSpeed = 0.04;
    let assemblyComplete = false;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let assembledCount = 0;

      particles.forEach((p) => {
        const dx = p.tx - p.x;
        const dy = p.ty - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        p.x += dx * lerpSpeed;
        p.y += dy * lerpSpeed;

        if (!assemblyComplete && dist < 1) {
          assembledCount++;
        }

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!assemblyComplete && assembledCount >= particles.length * 0.95) {
        assemblyComplete = true;
        setLoadingComplete(true);
      }

      frameId = requestAnimationFrame(render);
    };

    render();

    // Resize handling
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      const newOffsetX = (width - drawWidth) / 2;
      const newOffsetY = (height - drawHeight) / 2;

      const dx = newOffsetX - offsetX;
      const dy = newOffsetY - offsetY;
      particles.forEach((p) => {
        p.tx += dx;
        p.ty += dy;
      });

      offsetX = newOffsetX;
      offsetY = newOffsetY;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Exit motion + notify App when fully done
  useEffect(() => {
    if (loadingComplete && !notifiedRef.current) {
      notifiedRef.current = true;

      gsap.to("#loader-container", {
        y: "-100%",
        opacity: 0,
        duration: 1.0,
        ease: "power4.inOut",
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });
    }
  }, [loadingComplete, onComplete]);

  return (
    <motion.div
      id="loader-container"
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{ backgroundColor: "#A0A5B1" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center gap-6 text-primary">
        <canvas ref={canvasRef} style={{ display: "block" }} />
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary/70">
          {loadingComplete ? "INTERFACE READY" : "RECALCULATING CONSTRUCT"}
        </p>
      </div>
    </motion.div>
  );
}