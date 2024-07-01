import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .introduction {
    flex-grow: 1;
    flex-basis: 0;
    text-align: center;
    font-size: max(4vw, 40px);
    margin: 0;
    padding: 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;

    span em {
      animation: color-pulse 2s ease-in-out forwards;
      font-style: normal;

      @keyframes color-pulse {
        0% {
          color: inherit;
        }
        50% {
          color: #00a9a5;
        }
        100% {
          color: inherit;
        }
      }
    }

    span.done em {
      animation: color-change 1s ease-in-out forwards;
      font-style: normal;

      @keyframes color-change {
        from {
          color: inherit;
        }
        to {
          color: #00a9a5;
        }
      }
    }
  }

  .hint {
    flex-grow: 1;
    flex-basis: 0;
    text-align: center;
    font-size: max(1.5vw, 10px);
    margin: 0;
    opacity: 0;
    animation: fade-in 1s ease-in-out 2700ms forwards;

    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const Logo = styled.img`
  flex-shrink: 0;
  flex-grow: 0;
  height: 20vw;
  min-height: 150px;
  transition: translate 500ms cubic-bezier(0.175, 0.885, 0.5, 1.275),
    scale 500ms var(--fast-ease-out);

  &.start {
    translate: calc(-50vw - 50%) calc(100%);
  }

  &.center {
    translate: 0 0;

    &:hover {
      cursor: pointer;
      scale: 1.1;
    }
  }

  &.end {
    translate: calc(50vw + 50%) calc(-100%);
  }
`;

export const Spinner = styled.div`
  top: calc(50% - 10vw);
  left: calc(50% - 10vw);
  width: 20vw;
  height: 20vw;
  border: 3px solid #fff;
  border-top-color: #00000000;
  border-radius: 50%;
  opacity: 0;
  animation: spin 1s linear infinite, fade-in 500ms ease-in-out 500ms forwards;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
