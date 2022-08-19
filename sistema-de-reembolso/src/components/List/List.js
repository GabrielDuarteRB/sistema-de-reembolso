import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../utils/colors";

export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(768px, auto);
  justify-content: center;
  background-color: #fff;
  border: 1px solid ${primaryColor};
  border-radius: 4px;
  padding-top: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 700px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 425px;
  }

  @media (max-width: 425px) {
    grid-template-columns: 375px;
  }

  @media (max-width: 375px) {
    grid-template-columns: 320px;
  }
`;

export const ListHeader = styled.div`
  display: grid;
  padding: 0 32px 32px;
  gap: 32px;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    gap: 24px;
    justify-content: center;

    & > div,
    > div:first-child {
      display: grid;
      gap: 24px;
      justify-items: center;
      justify-content: center;

      & > div {
        display: grid;
      }
    }

    & > div:last-child {
      gap: 24px;
      justify-items: left;
      justify-content: center;
    }
  }
`;

export const ListFilters = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
  gap: 24px;

  & input {
    padding: 4px;
    border: 2px solid ${primaryColor};
    border-radius: 4px;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media (max-width: 425px) {
    & > div {
      display: grid;
    }
  }
`;

export const ListTitles = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  padding: 24px 16px 0;
  border-top: 1px solid #000;
  margin-bottom: 8px;
  color: #9fa2b4;

  @media (max-width: 768px) {
    display: none;
  }
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
  text-align: center;
  align-items: center;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  padding: 16px;
  border-top: 2px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};

  & div {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  :hover {
    background-color: ${secondaryColor};
  }

  & button:disabled {
    background: #9fa2b4;
    border: 2px solid #9fa2b4;
    cursor: default;

    :hover {
      color: ${secondaryColor};
    }
  }

  @media (max-width: 768px) {
    grid-template-areas:
      "titulo titulo titulo"
      "nome data valor"
      "status status acoes";
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: left;
    text-align: left;
    gap: 16px 8px;
  }

  @media (max-width: 700px) {
    grid-template-areas:
      "titulo titulo"
      "nome data"
      "valor status"
      "acoes acoes";
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 425px) {
    grid-template-areas:
      "titulo"
      "nome"
      "data"
      "valor"
      "status"
      "acoes";
    grid-template-columns: 1fr;
  }
`;

export const ItemInfo = styled.span`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;

  & strong {
    display: none;
  }

  @media (max-width: 768px) {
    :first-child {
      grid-area: titulo;
      max-width: auto;
      word-wrap: normal;
    }

    :nth-child(2) {
      grid-area: nome;
    }

    :nth-child(3) {
      grid-area: data;
    }

    :nth-child(4) {
      grid-area: valor;
    }

    :nth-child(5) {
      grid-area: status;
    }

    :nth-child(6) {
      grid-area: acoes;
    }

    & strong {
      display: inline-block;
    }
  }
`;
