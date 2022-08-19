import { Field, Formik } from "formik";
import logoAzul from "../../img/logoAzul.png";
import { connect } from "react-redux";
import {
  CardForm,
  FieldForm,
  FormItem,
  HeaderForm,
  PasswordContainer,
  TextError,
} from "./Form.style";
import { handleLogin } from "../../store/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { validationLogin } from "../../utils/validationsForm";
import { FaEye } from "react-icons/fa";
import { primaryColor, secondaryColor } from "../../utils/colors";
import {
  handleForm,
  handleTypePassword,
} from "../../store/actions/formActions";

const FormLogin = ({ typePassword, disabled, dispatch }) => {
  const navigate = useNavigate();

  return (
    <CardForm>
      <HeaderForm>
        <img src={logoAzul} alt="Logo DBC" />
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
          handleForm(dispatch, "disable");
          handleLogin(dispatch, values, navigate);
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <FieldForm onSubmit={handleSubmit}>
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
              Entrar
            </Button>
          </FieldForm>
        )}
      </Formik>
      <Link to={"/cadastro"}>Não possuo cadastro</Link>
    </CardForm>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
  disabled: state.formReducer.disabled,
  typePassword: state.formReducer.typePassword,
});

export default connect(mapStateToProps)(FormLogin);
