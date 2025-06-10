// components/ThreeBackground.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function SpinningCube() {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <SpinningCube />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </div>
  );
}
