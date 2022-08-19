import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height};
`;

export const LoadingDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #000;
  animation: flashing 1.4s infinite linear;
  margin: 0 4px;
  display: inline-block;

  :nth-child(1) {
    animation-delay: 0.2s;
  }

  :nth-child(2) {
    animation-delay: 0.4s;
  }

  :nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes flashing {
    0% {
      opacity: 0.2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
`;

export const LoadingElement = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 8px;
  background-image: linear-gradient(270deg, #fff, #9fa2b4, #9fa2b4, #fff);
  background-size: 400% 100%;
  animation: loading 6s ease-in-out infinite;

  @keyframes loading {
    from {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }
`;
