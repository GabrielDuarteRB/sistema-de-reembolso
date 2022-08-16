import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../utils/colors";

export const DropdownContent = styled.div`
  display: none !important;
  position: absolute;
  background-color: ${secondaryColor};
  border: 2px solid ${primaryColor};
  border-radius: 8px;

  & span {
    color: ${primaryColor};
    display: block;
    padding: 12px 16px;
  }

  & a {
    color: ${primaryColor};
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;

    :hover {
      background-color: ${primaryColor};
      color: ${secondaryColor};
    }

    :last-child {
      border-radius: 0 0 8px 8px;
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block !important;

  :hover ${DropdownContent} {
    display: block !important;
  }
`;
