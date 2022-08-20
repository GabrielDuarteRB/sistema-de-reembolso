import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../utils/colors";

export const DropdownContent = styled.div`
  display: none !important;
  position: absolute;
  background-color: #fff;
  border: 2px solid ${primaryColor};
  border-radius: 8px;

  & span {
    color: ${primaryColor};
    display: block;
    padding: 12px 16px;
    border-radius: 8px 8px 0 0;
  }

  & button {
    background: none;
    border: none;
    color: ${primaryColor};
    cursor: pointer;
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;

    :hover {
      background-color: ${primaryColor};
      color: ${secondaryColor};
    }

    :last-child {
      border-radius: 0 0 5px 5px;
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block !important;
  z-index: 1;

  :hover ${DropdownContent} {
    display: block !important;
  }
`;
