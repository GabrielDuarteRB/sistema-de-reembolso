import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
