import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function SpinningCube() {
    return (
      <mesh rotation={[0.4, 0.7, 0]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0ea5e9"
          emissiveIntensity={0.7}
          metalness={0.4}
          roughness={0.25}
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