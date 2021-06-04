import { Canvas } from "@react-three/fiber";
import React from "react";

export default function GameCanvas({ children }) {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight />
        {children}
      </Canvas>
    </div>
  );
}
