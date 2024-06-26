import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkyBox from "./components/SkyBox";
import Sun from "./components/Sun";

interface SolarSystemProps {
  setIsLoaded: (isLoaded: boolean) => void;
}

const SolarSystem = ({ setIsLoaded }: SolarSystemProps) => {
  const { camera } = useThree();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
