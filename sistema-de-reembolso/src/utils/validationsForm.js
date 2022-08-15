import * as Yup from "yup";
import { validationPassword } from "./regex";

const validationEmail = (email) => {
  if (email === undefined) {
    return;
  }

  email = email.split("@");
  if (email.length !== 2 || email[1] !== "dbccompany.com.br") {
    return false;
  }

  return true;
};

export const validationLogin = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email obrigatório!"),

  senha: Yup.string().required("Senha obrigatória!"),
});

export const validationRegister = Yup.object().shape({
  nome: Yup.string()
    .min(2, "Nome muito curto!")
    .max(50, "Nome muito longo!")
    .required("Nome obrigatorio!"),

  email: Yup.string()
    .test("EmailValidation", "Email inválido!", (value) =>
      validationEmail(value),
    )
    .email("Email inválido!")
    .required("Email obrigatório!"),

  senha: Yup.string()
    .test(
      "regex",
      `Obrigatório conter:
      8 caracteres,
      uma letra maiúscula,
      uma letra minúscula,
      um número
      e um caracter especial.`,
      (value) => {
        return validationPassword.test(value);
      },
    )
    .required("Senha obrigatória!"),
  confirmarSenha: Yup.string()
    .oneOf([Yup.ref("senha"), null], "Senhas diferentes!")
    .required("Confirme a senha!"),
});
