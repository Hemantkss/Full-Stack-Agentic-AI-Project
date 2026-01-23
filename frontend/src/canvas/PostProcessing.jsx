import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function PostProcessing() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.1}
        luminanceThreshold={0.15}
        luminanceSmoothing={0.9}
      />
    </EffectComposer>
  );
}
