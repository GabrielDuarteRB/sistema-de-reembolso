import styled from "styled-components";
import { secondaryColor } from "../../utils/colors";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;

  & div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  & select {
    padding: 2px;
    border-radius: 4px;
  }

  & button {
    display: flex;
    padding: 8px;
    background: none;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 4px;

    :hover {
      background-color: ${secondaryColor};
    }
  }
`;
