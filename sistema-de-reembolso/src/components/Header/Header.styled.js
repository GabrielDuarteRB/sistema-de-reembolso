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
  
  & img {
    width: 140px;
  }
`;
