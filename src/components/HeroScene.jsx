import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function SpinningCube() {
    const meshRef = useRef();
    useFrame((state, delta) => {
        // Add continuous rotation for both axes
        if(meshRef.current) {
            meshRef.current.rotation.y += 0.9 * delta;
            meshRef.current.rotation.x += 0.6 * delta;
        }
    });
    return (
      <mesh ref={meshRef}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0ea5e9"
          emissiveIntensity={0.85}
          metalness={0.34}
          roughness={0.18}
        />
      </mesh>
    );
}

export default function HeroScene() {
  return (
    <div className="h-64 w-full rounded-3xl overflow-hidden border border-slate-800 bg-black/40">
      <Canvas camera={{ position: [2, 2, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 4, 2]} intensity={1.2} />
        <Suspense fallback={null}>
          <SpinningCube />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}