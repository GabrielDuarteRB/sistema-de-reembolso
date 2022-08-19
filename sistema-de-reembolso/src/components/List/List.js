import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../utils/colors";

export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(800px, auto);
  justify-content: center;
  background-color: #fff;
  border: 1px solid ${primaryColor};
  border-radius: 4px;
  padding-top: 16px;
`;

export const ListHeader = styled.div`
  display: grid;
  padding: 0 32px;
  gap: 32px;

  & div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > section {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-self: flex-end;

    & input {
      padding: 4px;
      border: 2px solid ${primaryColor};
      border-radius: 4px;
    }
  }
`;

export const ListTitles = styled.div`
  display: grid;
  gap: 24px;

  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  margin-bottom: 8px;
  color: #9fa2b4;
`;

export const List = styled.ul`
  display: grid;

  :last-child {
    border-radius: 0 0 8px 8px;
    border-bottom: 1px solid ${secondaryColor};
  }
`;

export const ListItem = styled.li`
  display: grid;
  gap: 24px;
  align-items: center;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  padding: 16px 32px;
  border-top: 1px solid ${secondaryColor};

  & span {
    :first-child {
      max-width: 10rem;
      word-wrap: break-word;
    }
  }

  & div {
    display: flex;
    gap: 16px;
  }

  :hover {
    background-color: ${secondaryColor};
  }

  & select {
    padding: 4px;
    border-radius: 4px;
  }
`;
