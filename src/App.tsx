import { createContext, useState } from "react";
import GlobalStyle from "./GobalStyle";
import Header from "./components/Header";
import Home from "./sections/Home";
import Footer from "./components/Footer";
import Welcome from "./sections/Welcome";
import HamburgerMenu from "./components/HamburgerMenu";

export const GlobalContext = createContext({
  isLoaded: false,
  setIsLoaded: (_value: boolean) => {},
});

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <GlobalContext.Provider value={{ isLoaded, setIsLoaded }}>
      <HamburgerMenu />
      <GlobalStyle />
      <Welcome loaded={isLoaded} />
      <Home />
      <Header />
      <Footer />
    </GlobalContext.Provider>
  );
}

export default App;
