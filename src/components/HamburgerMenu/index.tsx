import { Container } from "./style";

const HamburgerMenu = () => {
  return (
    <Container>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H48"
          stroke="whitesmoke"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M0 12H48"
          stroke="whitesmoke"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M0 24H48"
          stroke="whitesmoke"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </Container>
  );
};

export default HamburgerMenu;
