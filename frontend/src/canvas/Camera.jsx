import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

const Camera = () => {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 5]}
        fov={50}
        near={0.1}
        far={100}
      />

      {/* <OrbitControls
        enableDamping
        dampingFactor={0.1}
        enableZoom={true}
        enablePan={true}
      /> */}
    </>
  );
};

export default Camera;
