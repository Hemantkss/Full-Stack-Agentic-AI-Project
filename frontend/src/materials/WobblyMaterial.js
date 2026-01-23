import { useMemo } from "react";
import * as THREE from "three";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";

import vertexShader from "../shaders/vertex.glsl";
import fragmentShader from "../shaders/fragment.glsl";
import { WobblyMaterialControls } from "../gui/WobblyMaterialControls";

export function WobblyMaterial(uniforms) {
  const controls = WobblyMaterialControls();

  return useMemo(() => {
    return new CustomShaderMaterial({
      baseMaterial: THREE.MeshPhysicalMaterial,
      vertexShader,
      fragmentShader,
      uniforms,

      metalness: controls.metalness,
      roughness: controls.roughness,

      iridescence: controls.iridescence,
      iridescenceIOR: controls.iridescenceIOR,
      iridescenceThicknessRange: [
        controls.iridescenceMinThickness,
        controls.iridescenceMaxThickness,
      ],

      clearcoat: controls.clearcoat,
      clearcoatRoughness: controls.clearcoatRoughness,

      envMapIntensity: controls.envMapIntensity,
      toneMapped: false,
      transparent: false,
      silent: true,
    });
  }, [
    uniforms,
    controls.metalness,
    controls.roughness,
    controls.iridescence,
    controls.iridescenceIOR,
    controls.iridescenceMinThickness,
    controls.iridescenceMaxThickness,
    controls.clearcoat,
    controls.clearcoatRoughness,
    controls.envMapIntensity,
  ]);
}
