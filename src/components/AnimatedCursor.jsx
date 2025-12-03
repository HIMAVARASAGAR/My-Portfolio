import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedCursor() {
  const cursorRef = useRef(null);     // container with shapes
  const followerRef = useRef(null);   // lagging ring
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const sphere = cursor.querySelector(".cursor-sphere");
    const octa = cursor.querySelector(".cursor-octa");
    if (!sphere || !octa) return;

    // start in center
    followerPos.current.x = window.innerWidth / 2;
    followerPos.current.y = window.innerHeight / 2;

    let mouseX = followerPos.current.x;
    let mouseY = followerPos.current.y;
    const delay = 0.15;

    const setCursorX = gsap.quickSetter(cursor, "x", "px");
    const setCursorY = gsap.quickSetter(cursor, "y", "px");
    const setFollowerX = gsap.quickSetter(follower, "x", "px");
    const setFollowerY = gsap.quickSetter(follower, "y", "px");

    // initial states
    gsap.set(sphere, { scale: 1, opacity: 1, transformOrigin: "50% 50%" });
    gsap.set(octa, { scale: 0, opacity: 0, transformOrigin: "50% 50%" });

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      setCursorX(mouseX);
      setCursorY(mouseY);
    };

    window.addEventListener("mousemove", onMouseMove);

    let frameId;
    const animate = () => {
      followerPos.current.x += (mouseX - followerPos.current.x) * delay;
      followerPos.current.y += (mouseY - followerPos.current.y) * delay;

      setFollowerX(followerPos.current.x);
      setFollowerY(followerPos.current.y);

      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    // ---- HOVER: sphere ↔ octahedron ----
    let isHovering = false;

    const setHoverState = (hover) => {
      if (hover === isHovering) return;
      isHovering = hover;

      // sphere → octa
      gsap.to(sphere, {
        scale: hover ? 0 : 1,
        opacity: hover ? 0 : 1,
        duration: 0.18,
        ease: "power2.out",
      });

      gsap.to(octa, {
        scale: hover ? 1 : 0,
        opacity: hover ? 1 : 0,
        rotate: hover ? 0 : -15, // tiny twist
        duration: 0.22,
        ease: "power2.out",
      });

      // follower ring pop
      gsap.to(follower, {
        scale: hover ? 1.6 : 1,
        borderColor: hover
          ? "rgba(255,255,255,0.9)"
          : "rgba(255,255,255,0.3)",
        backgroundColor: hover
          ? "rgba(255,255,255,0.08)"
          : "transparent",
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const hoverTargetsSelector = "a, button, .cursor-hover, .cursor-pointer, [role='button']";

    const onPointerMove = (e) => {
      const target = e.target.closest(hoverTargetsSelector);
      setHoverState(!!target);
    };

    document.addEventListener("mousemove", onPointerMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousemove", onPointerMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* lagging follower ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "9999px",
          border: "1px solid rgba(255,255,255,0.3)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* cursor container (holds sphere + octa) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: "20px",
          height: "20px",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* “3D” sphere using radial gradient */}
        <div
          className="cursor-sphere"
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle at 30% 30%, #ffffff, #d0d0d0 40%, #777777 100%)",
            boxShadow: "0 0 8px rgba(0,0,0,0.35)",
          }}
        />

        {/* flat octahedron (diamond) for hover */}
        <div
          className="cursor-octa"
          style={{
            position: "absolute",
            width: "12px",
            height: "12px",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            background:
              "linear-gradient(135deg, #ffffff 0%, #d0d0d0 40%, #7f7f7f 100%)",
            boxShadow: "0 0 10px rgba(0,0,0,0.4)",
          }}
        />
      </div>
    </>
  );
}