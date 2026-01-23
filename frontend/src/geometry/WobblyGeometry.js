import { useMemo } from "react";
import * as THREE from "three";
import { mergeVertices } from "three/addons/utils/BufferGeometryUtils.js";

export function WobblyGeometry(radius = 1, subdivisions = 60) {
  return useMemo(() => {
    let geometry = new THREE.IcosahedronGeometry(radius, subdivisions);
    geometry = mergeVertices(geometry);
    geometry.computeTangents();
    return geometry;
  }, [radius, subdivisions]);
}
