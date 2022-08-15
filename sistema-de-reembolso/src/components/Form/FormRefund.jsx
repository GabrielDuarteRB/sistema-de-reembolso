import { Field, Formik } from "formik";
import logo from "../../img/logo.svg";
import { connect } from "react-redux";
import {
  CardForm,
  FieldForm,
  FormItem,
  HeaderForm,
  InputFile,
  TextError,
} from "./Form.style";
import {  useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Container } from "../Container/Container";
import CurrencyInput from 'react-currency-masked-input'

const FormRefund = ({ typePassword, dispatch }) => {
  const navigate = useNavigate();

  return (
    <Container>
        <CardForm>
            <HeaderForm>
                <img src={logo} alt="Logo DBC" />
                <h1>Criar reembolso</h1>
            </HeaderForm>

            <Formik
                initialValues={{
                    titulo: "",
                    valor: "",
                    foto: ""
                }}
                // validationSchema={validationLogin}
                onSubmit={(values) => {
                console.log(values);
                }}
            >
                {({ errors, touched, handleSubmit }) => (
                    <FieldForm onSubmit={handleSubmit}>
                        <FormItem>
                            <label htmlFor="titulo">titulo*</label>
                            <Field type="text" name="titulo" placeholder="titulo" />
                            {errors.titulo && touched.titulo ? (
                                <TextError>{errors.titulo}</TextError>
                            ) : null}
                        </FormItem>

                        <FormItem>
                            <label htmlFor="valor">valor*</label>
                            <CurrencyInput type='text' separator=',' name="valor"/>
                            {errors.valor && touched.valor ? (
                                <TextError>{errors.valor}</TextError>
                            ) : null}
                        </FormItem>

                        <FormItem>
                            <label htmlFor="foto">Escolha uma foto</label>
                            <InputFile type="file" id="foto" name="foto" />
                        </FormItem>

                        <Button
                            background={primaryColor}
                            backgroundHover={secondaryColor}
                            padding={"12px 16px"}
                            color={secondaryColor}
                            colorHover={primaryColor}
                            borderColor={primaryColor}
                            type="submit"
                        >
                            Criar reembolso
                        </Button>
                    </FieldForm>
                )}
            </Formik>
        </CardForm>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
  typePassword: state.authReducer.typePassword,
});

export default connect(mapStateToProps)(FormRefund);
