import { useMemo } from "react";
import * as THREE from "three";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";

import vertexShader from "../shaders/vertex.glsl";

export function WobblyDepthMaterial(uniforms) {
  return useMemo(() => {
    return new CustomShaderMaterial({
      baseMaterial: THREE.MeshDepthMaterial,
      vertexShader,
      uniforms,
      depthPacking: THREE.RGBADepthPacking,
    });
  }, [uniforms]);
}
