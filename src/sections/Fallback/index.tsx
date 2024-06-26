import { FallbackContainer } from "./style";

interface FallbackProps {
  transitionTimeMs: number;
}

const Fallback = ({ transitionTimeMs }: FallbackProps) => {
  return <FallbackContainer>loading...</FallbackContainer>;
};

export default Fallback;
