import { useControls } from "leva";

export function WobblyMaterialControls() {
  return useControls("Material", {
    metalness: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.01,
    },

    roughness: {
      value: 0.15,
      min: 0,
      max: 1,
      step: 0.01,
    },

    envMapIntensity: {
      value: 1.5,
      min: 0,
      max: 5,
      step: 0.01,
    },

    clearcoat: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.01,
    },

    clearcoatRoughness: {
      value: 0.1,
      min: 0,
      max: 1,
      step: 0.01,
    },

    iridescence: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.01,
    },

    iridescenceIOR: {
      value: 1.3,
      min: 1,
      max: 2.33,
      step: 0.01,
    },

    iridescenceMinThickness: {
      value: 100,
      min: 0,
      max: 1000,
      step: 1,
    },

    iridescenceMaxThickness: {
      value: 400,
      min: 0,
      max: 1000,
      step: 1,
    },
  });
}
