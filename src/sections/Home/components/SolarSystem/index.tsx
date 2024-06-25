import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkyBox from "./components/SkyBox";
import Sun from "./components/Sun";

import { BLOOM_LAYER } from "@/constants";

const SolarSystem = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 10);
    camera.layers.enable(BLOOM_LAYER);
  }, [camera]);

  return (
    <>
      <OrbitControls enablePan={false} />
      <SkyBox />
      <Sun />
    </>
  );
};

export default SolarSystem;
