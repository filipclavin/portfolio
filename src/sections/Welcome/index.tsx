import { useEffect, useState } from "react";
import { Container, Logo, Spinner } from "./style";
import Typewriter from "@/components/Typewriter";

interface FallbackProps {
  loaded: boolean;
}

const Welcome = ({ loaded }: FallbackProps) => {
  const [logoState, setLogoState] = useState<"start" | "center" | "end">(
    "start"
  );
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    if (loaded && logoLoaded) {
      setLogoState("center");
    }
  }, [loaded, logoLoaded]);

  return (
    <Container>
      <h1 className="introduction">
        <Typewriter
          texts={[
            `Hi, I'm Filip Clavin.
            I'm a <em>game developer</em>.`,
            `Hi, I'm Filip Clavin.
            I work with <em>Unreal Engine</em>.`,
            `Hi, I'm Filip Clavin.
            I work with <em>Unity</em>.`,
            `Hi, I'm Filip Clavin.
            I specialize in <em>netcode</em>.`,
            `Hi, I'm Filip Clavin.
            I specialize in <em>tools programming</em>.`,
            `Hi, I'm Filip Clavin.
            I love <em>shaders</em>.`,
            `Hi, I'm Filip Clavin.
            I like to <em>learn</em> new things.`,
            `Hi, I'm Filip Clavin.
            I like working with <em>others</em>.`,
            `Hi, I'm Filip Clavin.
            I like to <em>solve</em> problems.`,
            `Hi, I'm Filip Clavin.
            I'm a <em>game developer</em>.`,
          ]}
          msBetweenChars={50}
          msBetweenTexts={2000}
        />
      </h1>
      {logoState == "start" && <Spinner />}
      <Logo
        src="/svg/Logo.svg"
        className={logoState}
        onLoad={() => {
          setLogoLoaded(true);
        }}
        alt="Logo"
      />
      {logoState != "start" && (
        <p className="hint">
          &uarr;
          <br />
          Start exploring
        </p>
      )}
    </Container>
  );
};

export default Welcome;
