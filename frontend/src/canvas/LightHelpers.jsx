import { useHelper } from "@react-three/drei";
import {
  DirectionalLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";

/**
 * Attach helpers to lights (DEV ONLY)
 */
const LightHelpers = ({
  directionalLight,
  pointLight,
  spotLight,
}) => {
  if (import.meta.env.PROD) return null;

  if (directionalLight) {
    useHelper(directionalLight, DirectionalLightHelper, 0.5, "blue");
  }

  if (pointLight) {
    useHelper(pointLight, PointLightHelper, 0.2, "lime");
  }

  if (spotLight) {
    useHelper(spotLight, SpotLightHelper, "red");
  }

  return null;
};

export default LightHelpers;
