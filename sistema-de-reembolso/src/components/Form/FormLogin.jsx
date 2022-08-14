import { Field, Formik } from "formik";
import logo from "../../img/logo.svg";
import { connect } from "react-redux";
import {
  CardForm,
  FieldForm,
  FormItem,
  HeaderForm,
  TextError,
} from "./Form.style";
import { handleLogin } from "../../store/actions/AuthActions";
import { Link, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../Button/Button";
import { validationLogin } from "../../utils/validationsForm";

const FormLogin = ({ auth, dispatch }) => {
  const navigate = useNavigate();

  return (
    <CardForm>
      <HeaderForm>
        <img src={logo} alt="Logo DBC" />
        <h4>Sistema de reembolso</h4>
        <h1>Fazer login</h1>
      </HeaderForm>

      <Formik
        initialValues={{
          email: "",
          senha: "",
        }}
        validationSchema={validationLogin}
        onSubmit={(values) => {
          handleLogin(dispatch, values, navigate);
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <FieldForm onSubmit={handleSubmit}>
            <FormItem>
              <label htmlFor="email">email*</label>
              <Field type="text" name="email" placeholder="Email" />
              {errors.email && touched.email ? (
                <TextError>{errors.email}</TextError>
              ) : null}
            </FormItem>

            <FormItem>
              <label htmlFor="senha">senha*</label>
              <Field type="text" name="senha" placeholder="Senha" />
              {errors.senha && touched.senha ? (
                <TextError>{errors.senha}</TextError>
              ) : null}
            </FormItem>

            <ButtonPrimary padding={"12px 16px"} type="submit">
              Entrar
            </ButtonPrimary>
          </FieldForm>
        )}
      </Formik>
      <Link to={"/cadastro"}>Não possuo cadastro</Link>
    </CardForm>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(FormLogin);
