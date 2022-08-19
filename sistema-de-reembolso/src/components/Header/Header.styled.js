import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../utils/colors";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${primaryColor};
  color: ${secondaryColor};

  & div {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  @media (max-width: 700px) {
    & img:first-child {
      display: none;
    }

    & div {
      gap: 16px;
    }
  }

  @media (max-width: 425px) {
    justify-content: center;
    padding: 16px 0;

    & div {
      justify-content: space-between;
      gap: 32px;
    }

    & h2 {
      display: none;
    }
  }
`;
