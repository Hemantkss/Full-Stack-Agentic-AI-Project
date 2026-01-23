import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { WobblyGeometry } from "../geometry/WobblyGeometry";
import { WobblyMaterial } from "../materials/WobblyMaterial";
import { WobblyDepthMaterial } from "../materials/WobblyDepthMaterial";
import { WobblyControls } from "../gui/WobblyControls.js";

export default function WobblySphere() {
  // 🎛 GUI
  const controls = WobblyControls();

  // 🔹 uniforms (single source of truth)
  const uniforms = useMemo(() => ({
    uTime: new THREE.Uniform(0),
    uPositionFrequency: new THREE.Uniform(controls.positionFrequency),
    uTimeFrequency: new THREE.Uniform(controls.timeFrequency),
    uStrength: new THREE.Uniform(controls.strength),
    uWarpPositionFrequency: new THREE.Uniform(controls.warpPositionFrequency),
    uWarpTimeFrequency: new THREE.Uniform(controls.warpTimeFrequency),
    uWarpStrength: new THREE.Uniform(controls.warpStrength),
    uColorA: new THREE.Uniform(new THREE.Color(controls.colorA)),
    uColorB: new THREE.Uniform(new THREE.Color(controls.colorB)),
  }), []);

  // 🔹 sync GUI → uniforms
  uniforms.uPositionFrequency.value = controls.positionFrequency;
  uniforms.uTimeFrequency.value = controls.timeFrequency;
  uniforms.uStrength.value = controls.strength;
  uniforms.uWarpPositionFrequency.value = controls.warpPositionFrequency;
  uniforms.uWarpTimeFrequency.value = controls.warpTimeFrequency;
  uniforms.uWarpStrength.value = controls.warpStrength;
  uniforms.uColorA.value.set(controls.colorA);
  uniforms.uColorB.value.set(controls.colorB);

  // 🔹 geometry & materials
  const geometry = WobblyGeometry(1, 100);
  const material = WobblyMaterial(uniforms);
  const depthMaterial = WobblyDepthMaterial(uniforms);

  // 🔹 animation
  useFrame((_, delta) => {
    uniforms.uTime.value += delta;
  });

  return (
    <mesh
      position={[1.5, 0, 0]}
      geometry={geometry}
      material={material}
      customDepthMaterial={depthMaterial}
    />
  );
}
