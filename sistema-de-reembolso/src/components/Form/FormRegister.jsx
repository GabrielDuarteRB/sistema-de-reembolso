import { Field, Formik } from "formik";
import logo from "../../img/logo.svg";
import { connect } from "react-redux";
import {
  CardForm,
  FieldForm,
  FormItem,
  HeaderForm,
  InputFile,
  Password,
  TextError,
} from "./Form.style";
import { handleSignUp, handleTypePassword } from "../../store/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import { validationRegister } from "../../utils/validationsForm";
import { ButtonPrimary } from "../Button/Button";
import { FaEye } from "react-icons/fa";

const FormRegister = ({ typePassword, dispatch }) => {
  const navigate = useNavigate();

  return (
    <CardForm>
      <HeaderForm>
        <img src={logo} alt={"logo DBC"} />
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
          };
          handleSignUp(dispatch, values, navigate);
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <FieldForm onSubmit={handleSubmit} encType="multipart/form-data">
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
              <Password>
                <Field type={typePassword} name="senha" placeholder="Senha" />
                <FaEye onClick={() => handleTypePassword(dispatch, typePassword)}/>
              </Password>
              {errors.senha && touched.senha ? (
                <TextError>{errors.senha}</TextError>
              ) : null}
            </FormItem>

            <FormItem>
              <label htmlFor="confirmarSenha">Confirme a senha*</label>
              <Field
                type='password'
                name="confirmarSenha"
                placeholder="Confirme a senha"
              />
              {errors.confirmarSenha && touched.confirmarSenha ? (
                <TextError>{errors.confirmarSenha}</TextError>
              ) : null}
            </FormItem>

            <FormItem>
              <label htmlFor="foto">Escolha uma foto</label>
              <InputFile type="file" id="foto" name="foto" />
            </FormItem>

            <ButtonPrimary padding={"12px 16px"} type="submit">
              Cadastrar
            </ButtonPrimary>
          </FieldForm>
        )}
      </Formik>

      <Link to="/">Voltar para o login</Link>
    </CardForm>
  );
};

const mapStateToProps = (state) => ({
  typePassword: state.authReducer.typePassword,
});

export default connect(mapStateToProps)(FormRegister);
