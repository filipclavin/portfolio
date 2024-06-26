import { Suspense, useEffect, useState } from "react";
import GlobalStyle from "./GobalStyle";
import Header from "./components/Header";
import { Canvas } from "@react-three/fiber";
import SolarSystem from "./sections/SolarSystem";
import Footer from "./components/Footer";
import Fallback from "./sections/Fallback";

const transitionTimeMs = 500;

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setShowFallback(false);
      }, transitionTimeMs);
    }
  }, [isLoaded]);

  return (
    <>
      <GlobalStyle />
      <Header />
      {true && <Fallback transitionTimeMs={transitionTimeMs} />}
      <Suspense fallback={null}>
        <Canvas>
          <SolarSystem setIsLoaded={setIsLoaded} />
        </Canvas>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
