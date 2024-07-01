import styled from "styled-components";

export const Container = styled.span`
  white-space: pre-line;

  &:after {
    content: "";
    height: 1em;
    width: 0;
    border-right: 0.075em solid #00a9a5;
  }

  &:not(.typing):after {
    animation: blink 1s steps(1, start) infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
