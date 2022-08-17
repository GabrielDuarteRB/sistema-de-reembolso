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
import {
  handleSignUp,
  handleTypePassword,
} from "../../store/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import { validationRegister } from "../../utils/validationsForm";
import { Button } from "../Button/Button";
import { FaEye, FaRegArrowAltCircleLeft, FaTrash } from "react-icons/fa";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { useState } from "react";

const FormRegister = ({ typePassword, dispatch }) => {
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
        }}
        validationSchema={validationRegister}
        onSubmit={(values) => {
          const newValues = {
            nome: values.nome,
            email: values.email,
            senha: values.senha,
            foto: values.foto,
          };
          handleSignUp(dispatch, newValues, navigate);
        }}
      >
        {({
          errors,
          touched,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          values,
        }) => (
          <FieldForm
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
          >
            <FormItem>
              <label htmlFor="nome">nome*</label>
              <Field type="text" name="nome" placeholder="Nome" />
              {errors.nome && touched.nome ? (
                <TextError>{errors.nome}</TextError>
              ) : null}
            </FormItem>

            <FormItem>
              <label htmlFor="email">email*</label>
              <Field type="email" name="email" placeholder="Email" />
              {errors.email && touched.email ? (
                <TextError>{errors.email}</TextError>
              ) : null}
            </FormItem>

            <FormItem>
              <label htmlFor="senha">senha*</label>
              <PasswordContainer>
                <Field type={typePassword} name="senha" placeholder="Senha" />
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
              />
              {errors.confirmarSenha && touched.confirmarSenha ? (
                <TextError>{errors.confirmarSenha}</TextError>
              ) : null}
            </FormItem>

            <FormItem>
              <label htmlFor="foto">Escolha uma foto</label>
              <FileContainer>
                <Field
                  accept=".png, .jpeg, .jpg"
                  type="file"
                  name="foto"
                  value={""}
                  onChange={(e) => handleFoto(e.target.files[0], setFieldValue)}
                />

                <small>{selectedFoto || "Nenhuma foto selecionada"}</small>

                <button
                  type="button"
                  onClick={() => handleFoto("", setFieldValue)}
                >
                  <FaTrash />
                </button>
              </FileContainer>
              {errors.foto && touched.foto ? (
                <TextError>{errors.foto}</TextError>
              ) : null}
            </FormItem>

            <Button
              type="submit"
              background={primaryColor}
              backgroundHover={"#FCFDFE"}
              padding={"12px 16px"}
              color={secondaryColor}
              colorHover={primaryColor}
              borderColor={primaryColor}
              disabled={isSubmitting}
            >
              Cadastrar
            </Button>
          </FieldForm>
        )}
      </Formik>

      <Link to="/">
        <FaRegArrowAltCircleLeft /> Voltar para o login
      </Link>
    </CardForm>
  );
};

const mapStateToProps = (state) => ({
  typePassword: state.authReducer.typePassword,
});

export default connect(mapStateToProps)(FormRegister);
