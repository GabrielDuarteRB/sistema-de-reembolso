import { Field, Formik } from "formik";
import logoAzul from "../../img/logoAzul.png";
import { connect } from "react-redux";
import {
  CardForm,
  FieldForm,
  FileContainer,
  FormItem,
  HeaderForm,
  PasswordContainer,
  TextError,
} from "./Form.style";
import { handleSignUp } from "../../store/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import { validationRegister } from "../../utils/validationsForm";
import { Button } from "../Button/Button";
import { FaEye, FaRegArrowAltCircleLeft, FaTrash } from "react-icons/fa";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { useState } from "react";
import {
  handleForm,
  handleTypePassword,
} from "../../store/actions/formActions";

const FormRegister = ({ typePassword, disabled, dispatch, isLogged }) => {
  const navigate = useNavigate();
  const [selectedFoto, setSelectedFoto] = useState("");

  const handleFoto = (foto, setFieldValue) => {
    setFieldValue("foto", foto);
    setSelectedFoto(foto.name);
  };

  return (
    <CardForm>
      <HeaderForm>
        <img src={logoAzul} alt={"logo DBC"} />
        <h4>Sistema de reembolso</h4>
        <h1>Cadastrar usuário</h1>
      </HeaderForm>

      <Formik
        initialValues={{
          nome: "",
          email: "",
          senha: "",
          confirmarSenha: "",
          foto: "",
          tipoUser: "COLABORADOR",
        }}
        validationSchema={validationRegister}
        onSubmit={(values) => {
          handleForm(dispatch, "disable");
          const newValues = {
            nome: values.nome,
            email: values.email,
            senha: values.senha,
            foto: values.foto,
            tipoUser: values.tipoUser,
          };
          handleSignUp(dispatch, newValues, navigate, isLogged);
        }}
      >
        {({ errors, touched, handleSubmit, setFieldValue }) => (
          <FieldForm
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
          >
            <FormItem>
              <label htmlFor="nome">nome*</label>
              <Field
                type="text"
                name="nome"
                placeholder="Nome"
                disabled={disabled}
              />
              {errors.nome && touched.nome ? (
                <TextError>{errors.nome}</TextError>
              ) : null}
            </FormItem>

            <FormItem>
              <label htmlFor="email">email*</label>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                disabled={disabled}
              />
              {errors.email && touched.email ? (
                <TextError>{errors.email}</TextError>
              ) : null}
            </FormItem>

            <FormItem>
              <label htmlFor="senha">senha*</label>
              <PasswordContainer>
                <Field
                  type={typePassword}
                  name="senha"
                  placeholder="Senha"
                  disabled={disabled}
                />
                <button
                  type="button"
                  background={"#000"}
                  onClick={() => handleTypePassword(dispatch, typePassword)}
                >
                  <FaEye />
                </button>
              </PasswordContainer>
              {errors.senha && touched.senha ? (
                <TextError>{errors.senha}</TextError>
              ) : null}
            </FormItem>

            <FormItem>
              <label htmlFor="confirmarSenha">Confirme a senha*</label>
              <Field
                type="password"
                name="confirmarSenha"
                placeholder="Confirme a senha"
                disabled={disabled}
              />
              {errors.confirmarSenha && touched.confirmarSenha ? (
                <TextError>{errors.confirmarSenha}</TextError>
              ) : null}
            </FormItem>

            {isLogged ? (
              <FormItem>
                <label htmlFor="tipoUser" disabled={disabled}>
                  Tipo do usuário
                </label>
                <Field component="select" name="tipoUser" multiple={false}>
                  <option value="COLABORADOR">Colaborador</option>
                  <option value="GESTOR">Gestor</option>
                  <option value="FINANCEIRO">Financeiro</option>
                  <option value="ADMINISTRADOR">Administrador</option>
                </Field>
              </FormItem>
            ) : (
              <FormItem>
                <label htmlFor="foto">Escolha uma foto</label>
                <FileContainer>
                  <small>{selectedFoto || "Nenhuma foto selecionada"}</small>
                  <div>
                    <Field
                      accept=".png, .jpeg, .jpg"
                      type="file"
                      name="foto"
                      value={""}
                      disabled={disabled}
                      onChange={(e) =>
                        handleFoto(e.target.files[0], setFieldValue)
                      }
                    />

                    <button
                      type="button"
                      disabled={disabled}
                      onClick={() => handleFoto("", setFieldValue)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </FileContainer>
                {errors.foto && touched.foto ? (
                  <TextError>{errors.foto}</TextError>
                ) : null}
              </FormItem>
            )}

            <Button
              type="submit"
              background={primaryColor}
              backgroundHover={"#FCFDFE"}
              padding={"12px 16px"}
              color={secondaryColor}
              colorHover={primaryColor}
              borderColor={primaryColor}
              disabled={disabled}
            >
              Cadastrar
            </Button>
          </FieldForm>
        )}
      </Formik>

      <Link to="/usuarios">
        <FaRegArrowAltCircleLeft /> Voltar para{" "}
        {isLogged ? "a tela principal" : "o login"}
      </Link>
    </CardForm>
  );
};

const mapStateToProps = (state) => ({
  disabled: state.formReducer.disabled,
  typePassword: state.formReducer.typePassword,
  isLogged: state.authReducer.isLogged,
});

export default connect(mapStateToProps)(FormRegister);
