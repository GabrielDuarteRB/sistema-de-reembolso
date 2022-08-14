import { Field, Formik } from "formik";
import logo from "../../img/logo.svg";
import { connect } from "react-redux";
import {
  CardForm,
  FieldForm,
  InputFile,
  SubTituloForm,
  TextError,
  TextoForm,
  TituloForm,
} from "./Form.style";
import { handleSignUp } from "../../store/actions/AuthActions";
import { useNavigate } from "react-router-dom";
import { ValidationRegister } from "../../utils/validationsForm";
import { ButtonForm } from "../Button/Button";

const FormRegister = ({ auth, dispatch }) => {
  const navigate = useNavigate();

  return (
    <CardForm>
      <img src={logo} />
      <SubTituloForm>Sistema de reembolso</SubTituloForm>
      <TituloForm>Cadastrar usuário</TituloForm>
      <Formik
        initialValues={{
          nome: "",
          email: "",
          senha: "",
          confirmarSenha: "",
          foto: "",
        }}
        onSubmit={(values, errors) => {
          console.log(values);
          const newValues = {
            nome: values.nome,
            email: values.email,
            senha: values.senha,
          };
          handleSignUp(dispatch, values, navigate);
        }}
        validationSchema={ValidationRegister}
      >
        {(props) => (
          <FieldForm
            onSubmit={props.handleSubmit}
            encType="multipart/form-data"
          >
            <label htmlFor="nome">nome*</label>
            <Field
              type="text"
              onChange={props.handleChange}
              value={props.values.nome}
              name="nome"
            />
            {props.errors.nome && props.touched.nome ? (
              <TextError>{props.errors.nome}</TextError>
            ) : null}

            <label htmlFor="email">email*</label>
            <Field
              type="text"
              onChange={props.handleChange}
              value={props.values.email}
              name="email"
            />
            {props.errors.email && props.touched.email ? (
              <TextError>{props.errors.email}</TextError>
            ) : null}

            <label htmlFor="senha">senha*</label>
            <Field
              type="text"
              onChange={props.handleChange}
              value={props.values.senha}
              name="senha"
            />
            {props.errors.senha && props.touched.senha ? (
              <TextError>{props.errors.senha}</TextError>
            ) : null}

            <label htmlFor="confirmarSenha">Confirme senha*</label>
            <Field
              type="text"
              onChange={props.handleChange}
              value={props.values.confirmarSenha}
              name="confirmarSenha"
            />
            {props.errors.confirmarSenha && props.touched.confirmarSenha ? (
              <TextError>{props.errors.confirmarSenha}</TextError>
            ) : null}

            <label>Escolha uma foto</label>
            <InputFile
              type="file"
              id="file"
              onChange={props.handleChange}
              value={props.values.foto}
              name="foto"
            />

            <ButtonForm type="submit">Cadastrar</ButtonForm>
          </FieldForm>
        )}
      </Formik>

      <TextoForm color="#3751FF" cursor="pointer" onClick={() => navigate("/")}>
        Voltar para o login
      </TextoForm>
    </CardForm>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(FormRegister);
