import * as Yup from "yup";
import { onlyNumber, validationPassword } from "./regex";

const validationEmail = (email) => {
  email = email.split("@");
  if (email.length !== 2 || email[1] !== "dbccompany.com.br") {
    return false;
  }
  return true;
};

const validationCurrency = (number) => {
  number = onlyNumber(number);
  if (number <= 0) {
    return false;
  }
  return true;
};

const validationFile = (url, types) => {
  url = url.split(".");

  return types.includes(url.at(-1));
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
    .test(
      "EmailValidation",
      "Email inválido!",
      (value) => value && validationEmail(value),
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
  foto: Yup.mixed().test("fileValidation", "Formato inválido!", (value) =>
    value !== undefined
      ? validationFile(value.name, ["png", "jpg", "jpeg"])
      : true,
  ),
});

export const validationRefund = Yup.object().shape({
  titulo: Yup.string().required("Título obrigatorio!"),
  valor: Yup.string()
    .test(
      "maiorZero",
      "Valor inválido!",
      (number) => number && validationCurrency(number),
    )
    .min(1, "Numero minimo")
    .required("Valor obrigatório!"),

  file: Yup.mixed()
    .test(
      "fileValidation",
      `Anexo deve ser .png, .jpg, .jpeg ou .pdf`,
      (value) =>
        value 
          ? validationFile(value.name, ["png", "jpg", "jpeg", "pdf"])
          : true,
    )
    .required("Anexo obrigatório!"),
});
