import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function MovingArrow() {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() % 4) / 4; // 0 to 1 over 4 seconds
    ref.current.position.y = -2 + t * 4; // moves from -2 to 2

    // subtle rotation around Y and X axes
    ref.current.rotation.y += 0.005;
    ref.current.rotation.x += 0.002;
  });

  return (
    <group ref={ref} position={[0, -2, 0]}>
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh position={[0, 1.1, 0]}>
        <coneGeometry args={[0.1, 0.3, 16]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="relative top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [2, 2, 4] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MovingArrow />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
