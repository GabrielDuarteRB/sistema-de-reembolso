import styled from "styled-components";
import { secondaryColor } from "../../utils/colors";

export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: 768px;
  justify-content: center;
  background-color: #fff;
  border-radius: 4px;
  padding: 16px 0;
`;

export const ListHeader = styled.div`
  display: grid;
  padding: 0 32px;
  gap: 40px;

  & div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ListTitles = styled.div`
  display: grid;
  gap: 24px;

  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 8px;
  color: #9fa2b4;
`;

export const List = styled.ul`
  display: grid;

  & li {
    display: grid;
    gap: 24px;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    padding: 16px 32px;
    border-top: 1px solid ${secondaryColor};

    & div {
      display: flex;
      gap: 16px;
    }

    :hover {
      background-color: ${secondaryColor};
    }
  }

  :last-child {
    border-bottom: 1px solid ${secondaryColor};
  }
`;
