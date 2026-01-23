import { useControls } from "leva";

export function WobblyControls() {
  return useControls("Wobbly", {
    colorA: "#ff00ff",
    colorB: "#00ffff",

    positionFrequency: {
      value: 2.25,
      min: 0,
      max: 3,
      step: 0.01,
    },

    timeFrequency: {
      value: 0.83,
      min: 0,
      max: 5,
      step: 0.01,
    },

    strength: {
      value: 0.38,
      min: 0,
      max: 2,
      step: 0.01,
    },

    warpPositionFrequency: {
      value: 0.92,
      min: 0,
      max: 3,
      step: 0.01,
    },

    warpTimeFrequency: {
      value: 0.15,
      min: 0,
      max: 3,
      step: 0.01,
    },

    warpStrength: {
      value: 0.23,
      min: 0,
      max: 5,
      step: 0.01,
    },
  });
}
