import styled from "styled-components";

export const FallbackContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  position: absolute;
  width: 20vw;
  transition: translate 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    scale 500ms cubic-bezier(0.175, 0.885, 0.32, 1);

  &.start {
    translate: calc(-50vw - 50%) calc(50vh + 50%);
  }

  &.center {
    translate: 0 0;
  }

  &.end {
    translate: calc(50vw + 50%) calc(-50vh - 50%);
  }

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`;
