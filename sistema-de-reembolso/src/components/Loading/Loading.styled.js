import styled from "styled-components";

export const LoadingDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #000;
  animation: flashing 1.4s infinite linear;
  margin: 0 4px;
  display: inline-block;

  :nth-child(3) {
    animation-delay: 0.2s;
  }

  :nth-child(4) {
    animation-delay: 0.4s;
  }

  :nth-child(5) {
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
