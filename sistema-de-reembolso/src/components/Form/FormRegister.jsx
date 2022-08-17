import { Field, Formik } from "formik";
import { useState } from "react";
import logoAzul from "../../img/logoAzul.png";
import { connect } from "react-redux";
import {
  CardForm,
  FieldForm,
  FormItem,
  HeaderForm,
  InputContainer,
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

const FormRegister = ({ typePassword, dispatch }) => {
  const navigate = useNavigate();

  const handleFoto = (foto, setFieldValue) => {
    setFieldValue("foto", foto);
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
        onSubmit={(values, e) => {
          const newValues = {
            nome: values.nome,
            email: values.email,
            senha: values.senha,
            foto: values.foto,
          };
          handleSignUp(dispatch, newValues, navigate);
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
              <InputContainer>
                <Field type={typePassword} name="senha" placeholder="Senha" />
                <button
                  type="button"
                  background={"#000"}
                  onClick={() => handleTypePassword(dispatch, typePassword)}
                >
                  <FaEye />
                </button>
              </InputContainer>
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
              <label htmlFor="file">Escolha uma foto</label>
              <InputContainer>
                <Field
                  accept=".png, .jpeg, .jpg"
                  type="file"
                  name="foto"
                  value={""}
                  onChange={(e) => handleFoto(e.target.files[0], setFieldValue)}
                />
                <button type="button" onClick={() => setFieldValue("foto", "")}>
                  <FaTrash />
                </button>
              </InputContainer>
              {errors.file && touched.file ? (
                <TextError>{errors.file}</TextError>
              ) : null}
            </FormItem>

            <Button
              background={primaryColor}
              backgroundHover={"#FCFDFE"}
              padding={"12px 16px"}
              color={secondaryColor}
              colorHover={primaryColor}
              borderColor={primaryColor}
              type="submit"
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
