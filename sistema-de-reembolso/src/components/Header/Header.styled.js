import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../utils/colors";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;
  background-color: ${primaryColor};
  color: ${secondaryColor};

  & div {
    display: flex;
    gap: 24px;
  }
`;
