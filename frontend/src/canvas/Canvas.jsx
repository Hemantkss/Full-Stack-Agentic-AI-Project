import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const ThreeCanvas = () => {
  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,          // ✅ visible
        pointerEvents: "none",
      }}
    >
      <Scene />
    </Canvas>
  );
};

export default ThreeCanvas;
