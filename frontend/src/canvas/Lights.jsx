import { useRef } from "react";
import LightHelpers from "./LightHelpers";

const Lights = () => {
  const directionalBlueRef = useRef();
  const directionalGreenRef = useRef();
  const directionalWhiteRef = useRef();
  const pointRef = useRef();

  return (
    <>
      <ambientLight intensity={2} />

      <directionalLight
        ref={directionalBlueRef}
        color="#0000FF"
        position={[-2, 1.5, 0.2]}
        intensity={0.5}
      />

      <directionalLight
        ref={directionalGreenRef}
        color="#00FF00"
        position={[2, 1.5, 0.2]}
        intensity={0.2}
      />
      <directionalLight
        ref={directionalWhiteRef}
        color="#FFFFFF"
        position={[-0.5, -2, 0.5]}
        intensity={0.1}
      />

      <pointLight
        ref={pointRef}
        color="#FF0000"
        position={[0.9, 0.5, 1.3]}  
        intensity={2}       
        distance={2}
        decay={4}
      />

      {/* <LightHelpers
        directionalLight={directionalBlueRef}
        pointLight={pointRef}
      />

      <LightHelpers
        directionalLight={directionalGreenRef}
      />

      <LightHelpers
        directionalLight={directionalWhiteRef}
      /> */}
    </>
  );
};

export default Lights;
