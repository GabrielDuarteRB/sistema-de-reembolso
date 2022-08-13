import styled from 'styled-components'

export const CardForm = styled.div`
    align-items: center;
    background-color: orange;
    border: 1px solid #DFE0EB;
    border-radius: 8px; 
    display: flex;
    flex-direction: column ;
    height: auto;
    justify-content: center ;
    padding: 24px 8px;
    width: 380px;
`

export const FieldForm = styled.form` 
    margin-bottom: 24px ;
    display: flex;
    flex-direction: column;
    &>input {
        background: #FCFDFE;
        border: 1px solid #F0F1F7;
        border-radius: 8px;
        height:42px ;
        padding-left: 16px;
        margin: 8px 0 24px;
        width: 316px ;
        ::placeholder {
            color: #4B506D;
            opacity: 0.4;
        }
        :focus{
            outline: 1px solid #1E1E1E;
        }
    }
    & svg {
        margin-left: -30px ;
    }
    & > select {
        background: #FCFDFE;
        border: 1px solid #F0F1F7;
        border-radius: 8px;
        height:42px ;
        padding-left: 16px;
        margin-bottom: 8px;
        width: 316px ;
        ::placeholder {
            color: #4B506D;
            opacity: 0.4;
        }
    }
    & > textarea {
        background: #FCFDFE;
        border: 1px solid #F0F1F7;
        border-radius: 8px;
        height:80px ;
        padding: 8px 16px;
        margin-bottom: 8px;
        width: 316px ;
        ::placeholder {
            color: #4B506D;
            opacity: 0.4;
        }
    }
    & label {
        color: #9FA2B4;
        font-weight: 700;
        text-transform: uppercase;
    }
`

export const InputFile = styled.input`
    color: transparent;
    ::-webkit-file-upload-button {
        visibility: hidden;
    }
    ::before{
        align-items: center;
        content: '🔍Procurar';
        color: black ;
        cursor: pointer;
        display: flex ;
        font-size: 16px;
        font-weight: bold;
        justify-content:center;
        height: 100%;
        width: auto;
    }
`

export const TituloForm = styled.h1`
    color: #252733;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px ;
`

export const SubTituloForm = styled.h4`
    color: #A4A6B3;
    font-size: 18px;
    font-weight: 700;
    margin: 16px 0 32px;
`

export const TextoForm = styled.p(({color, cursor}) => ({
    color: color,
    fontSize: '14px',
    marginBottom: '40px',
    cursor: cursor ? cursor : 'auto'
}));

