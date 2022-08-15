import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: ${(props) => props.background};
  border: none;
  cursor: pointer;
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  border-radius: 4px;
  font-size: 1rem;
  border: 2px solid ${(props) => props.borderColor};
  transition: 0.2s;

  :hover {
    background-color: ${(props) => props.backgroundHover};
    color: ${(props) => props.colorHover};
  }
`;
