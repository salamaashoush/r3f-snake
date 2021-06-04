import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function GameCanvas({ children }) {
  return (
    <div className="canvas-container">
      <Canvas>
        <Stage>{children}</Stage>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}
