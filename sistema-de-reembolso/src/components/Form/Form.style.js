import styled from "styled-components";
import { errorMessage, primaryColor } from "../../utils/colors";

export const CardForm = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  background-color: #fff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  padding: 32px;
  gap: 32px;

  & a {
    text-decoration: none;
    color: ${primaryColor};

    :hover {
      text-decoration: underline;
    }
  }
`;

export const FieldForm = styled.form`
  display: grid;
  grid-template-columns: 300px;
  gap: 24px;

  & > button {
    margin-top: 8px;
  }
`;

export const FormItem = styled.div`
  display: grid;
  align-content: start;
  gap: 8px;

  & > input {
    padding: 12px 16px;
    background: #fcfdfe;
    border: 2px solid #f0f1f7;
    border-radius: 8px;
    padding-left: 16px;

    ::placeholder {
      color: #4b506d;
      opacity: 0.4;
    }
    :focus {
      outline: 1px solid ${primaryColor};
    }
  }

  & label {
    color: #9fa2b4;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const InputFile = styled.input`
  color: transparent;
  cursor: pointer;
  position: relative;

  ::file-selector-button {
    display: none;
  }

  ::before {
    content: "🔍 Procurar";
    color: black;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    top: 20%;
    right: 35%;
  }
`;

export const HeaderForm = styled.div`
  display: grid;
  justify-items: center;
  gap: 24px;

  & h4 {
    color: #a4a6b3;
    font-weight: 700;
  }
`;

export const TextError = styled.small`
  color: ${errorMessage};
  font-weight: bold;
`;
