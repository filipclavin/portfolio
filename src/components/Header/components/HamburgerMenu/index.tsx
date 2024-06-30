import { HamburgerMenuContainer } from "./style";

const HamburgerMenu = () => {
  return (
    <HamburgerMenuContainer>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12H21"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3 6H21"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3 18H21"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
