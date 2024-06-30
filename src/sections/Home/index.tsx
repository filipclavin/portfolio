import { Canvas } from "@react-three/fiber";
import SolarSystem from "./components/SolarSystem";
import { Suspense } from "react";

const Home = () => {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <SolarSystem />
      </Canvas>
    </Suspense>
  );
};

export default Home;
