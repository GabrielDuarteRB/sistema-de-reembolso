import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../utils/colors";

export const ButtonPrimary = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${primaryColor};
  border: none;
  cursor: pointer;
  padding: ${(props) => props.padding};
  color: ${secondaryColor};
  border-radius: 4px;
  font-size: 1rem;
  border: 2px solid ${primaryColor};
  transition: 0.2s;

  :hover {
    background-color: ${secondaryColor};
    color: ${primaryColor};
  }
`;
