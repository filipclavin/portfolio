import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  transition: opacity 250ms var(--fast-ease-out);

  & svg:not(:hover) {
    opacity: 0.25;
  }
`;
