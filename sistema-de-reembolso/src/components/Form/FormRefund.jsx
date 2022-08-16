import { Field, Formik } from "formik";
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
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Container } from "../Container/Container";
import CurrencyInput from "react-currency-input";
import { validationRefund } from "../../utils/validationsForm";
import { formatNumber } from "../../utils/regex";
import { FaRegArrowAltCircleLeft, FaTrash } from "react-icons/fa";

const FormRefund = () => {
  return (
    <Container>
      <CardForm>
        <HeaderForm>
          <img src={logoAzul} alt="Logo DBC" />
          <h1>Criar reembolso</h1>
        </HeaderForm>
        <Formik
          initialValues={{
            titulo: "",
            valor: "",
            file: "",
          }}
          validationSchema={validationRefund}
          onSubmit={(values) => {
            const newValues = {
              titulo: values.titulo,
              valor: formatNumber(values.valor),
            };
            console.log(newValues);
          }}
        >
          {({ errors, touched, handleSubmit, values, setFieldValue }) => (
            <FieldForm onSubmit={handleSubmit} encType="multipart/form-data">
              <FormItem>
                <label htmlFor="titulo">título*</label>
                <Field type="text" name="titulo" placeholder="Título" />
                {errors.titulo && touched.titulo ? (
                  <TextError>{errors.titulo}</TextError>
                ) : null}
              </FormItem>

              <FormItem>
                <label htmlFor="valor">valor*</label>
                <CurrencyInput
                  type="text"
                  prefix="R$ "
                  name="valor"
                  decimalSeparator=","
                  thousandSeparator="."
                  value={values.valor}
                  onChange={(value) => {
                    setFieldValue("valor", value);
                  }}
                />
                {errors.valor && touched.valor ? (
                  <TextError>{errors.valor}</TextError>
                ) : null}
              </FormItem>

              <FormItem>
                <label htmlFor="file">Enviar anexo</label>
                <InputContainer>
                  <Field
                    accept=".pdf, .jpeg, .jpg, .png"
                    type="file"
                    name="file"
                  />
                  <button
                    type="button"
                    onClick={() => setFieldValue("file", "")}
                  >
                    <FaTrash />
                  </button>
                </InputContainer>
                {errors.file && touched.file ? (
                  <TextError>{errors.file}</TextError>
                ) : null}
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
                Solicitar reembolso
              </Button>
            </FieldForm>
          )}
        </Formik>
        <Link to="/principal">
          <FaRegArrowAltCircleLeft />
          Voltar para a tela principal
        </Link>
      </CardForm>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
  typePassword: state.authReducer.typePassword,
});

export default connect(mapStateToProps)(FormRefund);
