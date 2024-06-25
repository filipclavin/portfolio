import { Canvas } from "@react-three/fiber";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SolarSystem from "./components/SolarSystem";
import { Suspense } from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Canvas>
          <SolarSystem />
        </Canvas>
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
