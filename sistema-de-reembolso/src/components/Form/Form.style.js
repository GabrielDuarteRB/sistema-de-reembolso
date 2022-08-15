import styled from "styled-components";
import { Field } from "formik";
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

  & input[type='file'] {
    cursor: pointer ;

    ::file-selector-button {
      display: none;
    }

    ::before {
      content: "📂";
      margin-right: 8px ;
    }
  }

  &  input {
    padding: 12px 16px;
    background: #fcfdfe;
    border: 2px solid #f0f1f7;
    border-radius: 8px;

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
`

export const Password = styled.div`
  align-items: center;
  display: flex;
  & input {
    width: 100% ;
  }
  & > svg {
    cursor: pointer;
    font-size: 14px;
    margin-left: -30px;
  }
`

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
