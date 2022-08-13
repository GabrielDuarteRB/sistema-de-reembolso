import * as Yup from 'yup';

const validationEmail = (email) => {
    if(email === undefined) {
        return
    }

    email = email.split('@')

    if(email.length !== 2){
        return false
    }

    if(email[1] !== 'dbccompany.com.br'){
        return false
    }

    return true
}

export const ValidationRegister = Yup.object().shape({
    nome: Yup.string()
      .min(2, 'Nome muito curto!')
      .max(50, 'Nome muito longo!')
      .required('Nome obrigatorio!'),
    login: Yup.string()
      .test('EmailValidation', 'Email inválida!', (value) => validationEmail(value))
      .email('Email inválido!')
      .required('Email obrigatório!'),
    senha: Yup.string()
    .matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        `
        Obrigatório conter:
            - 8 caracters
            - Uma letra maiúscula
            - Uma letra minúscula
            - Um número
            - Um caracter especial
        `
    )
    .required('Senha obrigatório!'),
    confirmarSenha: Yup.string()
    .oneOf([Yup.ref("senha"), null], "Senhas diferentes!")
    .required('Confirme a senha!'),
})