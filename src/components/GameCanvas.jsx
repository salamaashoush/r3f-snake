import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function GameCanvas({ children }) {
  return (
    <div className="canvas-container">
      <Canvas>
        <Suspense fallback={null}>
          <Stage shadows={false} contactShadow={false}>
            {children}
          </Stage>
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
