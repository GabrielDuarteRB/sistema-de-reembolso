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
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../Button/Button";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Container } from "../Container/Container";
import CurrencyInput from "react-currency-input";
import { validationRefund } from "../../utils/validationsForm";
import { formatNumber } from "../../utils/regex";
import { FaRegArrowAltCircleLeft, FaTrash } from "react-icons/fa";
import {
  getRefundById,
  handleCreateRefund,
  handleUpdateRefund,
} from "../../store/actions/refundActions";
import { useEffect } from "react";

const FormRefund = ({ dispatch, refundId, isLoading }) => {
  const navigate = useNavigate();

  const { idRefund } = useParams();

  const handleFile = (file, setFieldValue) => {
    // console.log(file);
    setFieldValue("file", file);
  };

  useEffect(() => {
    if(idRefund) {
      getRefundById(dispatch, idRefund)
    }
  }, [])

  if(isLoading){
    return(
      <isLoading/>
    )
  }

  console.log(refundId)

  return (
    <Container>
      <CardForm>
        <HeaderForm>
          <img src={logoAzul} alt="Logo DBC" />
          <h1>{idRefund ? "Atualizar" : "Solicitar"} reembolso</h1>
        </HeaderForm>
        <Formik
          initialValues={{
            titulo: refundId ? refundId.titulo : '',
            valor: refundId ? refundId.valor : '',
            file: "",
          }}
          validationSchema={validationRefund}
          onSubmit={(values) => {
            const newValues = {
              titulo: values.titulo,
              valor: formatNumber(values.valor),
            };

            idRefund
              ? handleUpdateRefund(dispatch, newValues, idRefund, navigate)
              : handleCreateRefund(dispatch, newValues, navigate);
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
                  // onChange={(value) => {
                  //   setFieldValue("valor", value);
                  // }}
                />
                {errors.valor && touched.valor ? (
                  <TextError>{errors.valor}</TextError>
                ) : null}
              </FormItem>

              <FormItem>
                <label htmlFor="file">Enviar anexo</label>
                <InputContainer>
                  <Field
                    accept=".pdf, .png, .jpeg, .jpg"
                    type="file"
                    name="file"
                    value={values.file}
                    onChange={(e) =>
                      handleFile(e.target.files[0], setFieldValue)
                    }
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
                {idRefund ? "Atualizar" : "Solicitar"} reembolso
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
  refundId: state.refundReducer.refundId,
  isLoading: state.refundReducer.isLoading,
});

export default connect(mapStateToProps)(FormRefund);
