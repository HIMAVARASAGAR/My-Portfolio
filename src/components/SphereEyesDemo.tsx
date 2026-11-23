import { useState, useEffect } from "react";
import LiveOrb from "./LiveOrb";

export function SphereEyesDemo() {
  const [size, setSize] = useState(300);

  useEffect(() => {
    const updateSize = () => {
      const minDimension = Math.min(window.innerWidth, window.innerHeight);
      setSize(Math.max(200, Math.min(340, minDimension * 0.45)));
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f6ed",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <LiveOrb variant="black" size={size} interactive blink />
    </main>
  );
}

export default SphereEyesDemo;
