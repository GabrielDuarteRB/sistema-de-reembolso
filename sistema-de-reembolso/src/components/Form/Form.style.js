import styled from "styled-components";
import { wrongMensager } from "../../utils/colors";

export const CardForm = styled.div`
  align-items: center;
  background-color: orange;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 24px 32px;
  width: 380px;
`;

export const FieldForm = styled.form`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  & > input {
    background: #fcfdfe;
    border: 1px solid #f0f1f7;
    border-radius: 8px;
    height: 42px;
    padding-left: 16px;
    margin-top: 8px;
    width: 316px;
    ::placeholder {
      color: #4b506d;
      opacity: 0.4;
    }
    :focus {
      outline: 1px solid #1e1e1e;
    }
  }
  & svg {
    margin-left: -30px;
  }
  & > select {
    background: #fcfdfe;
    border: 1px solid #f0f1f7;
    border-radius: 8px;
    height: 42px;
    padding-left: 16px;
    margin-bottom: 8px;
    width: 316px;
    ::placeholder {
      color: #4b506d;
      opacity: 0.4;
    }
  }
  & > textarea {
    background: #fcfdfe;
    border: 1px solid #f0f1f7;
    border-radius: 8px;
    height: 80px;
    padding: 8px 16px;
    margin-bottom: 8px;
    width: 316px;
    ::placeholder {
      color: #4b506d;
      opacity: 0.4;
    }
  }
  & label {
    color: #9fa2b4;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 24px;
  }
  & button {
    margin-top: 24px;
  }
`;

export const InputFile = styled.input`
  color: transparent;
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    align-items: center;
    content: "🔍Procurar";
    color: black;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: bold;
    justify-content: center;
    height: 100%;
    width: auto;
  }
`;

export const TituloForm = styled.h1`
  color: #252733;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const SubTituloForm = styled.h4`
  color: #a4a6b3;
  font-size: 18px;
  font-weight: 700;
  margin: 16px 0 32px;
`;

export const TextoForm = styled.p(({ color, cursor }) => ({
  color: color,
  fontSize: "14px",
  marginBottom: "30px",
  cursor: cursor ? cursor : "auto",
}));

export const TextError = styled.small`
  color: ${wrongMensager};
  font-weight: bold;
  margin-top: 8px;
`;
