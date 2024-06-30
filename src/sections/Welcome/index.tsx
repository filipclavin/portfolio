import { useEffect, useState } from "react";
import { FallbackContainer, Logo } from "./style";

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
    <FallbackContainer>
      <Logo
        src="/assets/svg/Logo.svg"
        className={logoState}
        onLoad={() => {
          setLogoLoaded(true);
        }}
      />
    </FallbackContainer>
  );
};

export default Welcome;
