import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useContext, useEffect } from "react";
import SkyBox from "./components/SkyBox";
import Sun from "./components/Sun";
import { GlobalContext } from "@/App";

const SolarSystem = () => {
  const { setIsLoaded } = useContext(GlobalContext);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0, 10);
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
