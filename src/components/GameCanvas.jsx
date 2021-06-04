import { Canvas } from "@react-three/fiber";

export default function GameCanvas({ children }) {
  return (
    <Canvas>
      <ambientLight />
      {children}
    </Canvas>
  );
}
