import Camera from "./Camera";
import Lights from "./Lights";
import { Environment } from "@react-three/drei";
import WobblySphere from "../meshes/WobblySphere";
import PostProcessing from "./PostProcessing";

const Scene = () => {
  return (
    <>
      <Camera />
      <Lights />

      {/* 3D Objects */}
      <WobblySphere />

      {/* Environment */}
      <Environment preset="studio" />

      {/* 🌈 Postprocessing (ALWAYS LAST) */}
      <PostProcessing />
    </>
  );
};

export default Scene;
