import { Field, Formik } from "formik";
import logoAzul from "../../img/logoAzul.png";
import { connect } from "react-redux";
import {
  CardForm,
  FieldForm,
  FormItem,
  HeaderForm,
  Password,
  TextError,
} from "./Form.style";
import {
  handleLogin,
  handleTypePassword,
} from "../../store/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { validationLogin } from "../../utils/validationsForm";
import { FaEye } from "react-icons/fa";
import { primaryColor, secondaryColor } from "../../utils/colors";

const FormLogin = ({ typePassword, dispatch }) => {
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
              <Password>
                <Field type={typePassword} name="senha" placeholder="Senha" />
                <FaEye
                  onClick={() => handleTypePassword(dispatch, typePassword)}
                />
              </Password>
              {errors.senha && touched.senha ? (
                <TextError>{errors.senha}</TextError>
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
  typePassword: state.authReducer.typePassword,
});

export default connect(mapStateToProps)(FormLogin);
