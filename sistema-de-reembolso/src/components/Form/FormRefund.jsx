import { Field, Formik } from "formik";
import logoAzul from "../../img/logoAzul.png";
import { connect } from "react-redux";
import {
  CardForm,
  FieldForm,
  FileContainer,
  FormItem,
  HeaderForm,
  TextError,
} from "./Form.style";
import Loading from "../../components/Loading/Loading";
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
import { useEffect, useState } from "react";
import { handleForm } from "../../store/actions/formActions";

const FormRefund = ({ dispatch, disabled, refundById, isLoading }) => {
  const navigate = useNavigate();
  const { idRefund } = useParams();
  const [selectedFile, setSelectedFile] = useState("");

  const handleFile = (file, setFieldValue) => {
    setFieldValue("file", file);
    setSelectedFile(file.name);
  };

  useEffect(() => {
    if (idRefund) {
      getRefundById(dispatch, idRefund);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <CardForm>
        <HeaderForm>
          <img src={logoAzul} alt="Logo DBC" />
          <h1>{idRefund ? "Atualizar" : "Solicitar"} reembolso</h1>
        </HeaderForm>
        <Formik
          initialValues={{
            titulo: refundById.titulo || "",
            valor: refundById.valor || "",
            file: "",
          }}
          validationSchema={validationRefund}
          onSubmit={(values) => {
            handleForm(dispatch, "disable");

            const newValues = {
              titulo: values.titulo,
              valor: formatNumber(values.valor.toString()),
              file: values.file,
            };

            idRefund
              ? handleUpdateRefund(dispatch, newValues, idRefund, navigate)
              : handleCreateRefund(dispatch, newValues, navigate);
          }}
        >
          {({ errors, touched, handleSubmit, values, setFieldValue }) => (
            <FieldForm onSubmit={handleSubmit} encType="multipart/form-data">
              {setSelectedFile(refundById.anexoDTO && refundById.anexoDTO.nome)}

              <FormItem>
                <label htmlFor="titulo">título*</label>
                <Field
                  type="text"
                  name="titulo"
                  placeholder="Título"
                  disabled={disabled}
                />
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
                  disabled={disabled}
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
                <FileContainer>
                  <Field
                    accept=".pdf, .png, .jpeg, .jpg"
                    type="file"
                    name="file"
                    value={""}
                    disabled={disabled}
                    onChange={(e) =>
                      handleFile(e.target.files[0], setFieldValue)
                    }
                  />

                  <small>{selectedFile || "Nenhum anexo selecionado"}</small>

                  <button
                    type="button"
                    onClick={() => handleFile("", setFieldValue)}
                  >
                    <FaTrash />
                  </button>
                </FileContainer>

                {errors.file && touched.file ? (
                  <TextError>{errors.file}</TextError>
                ) : null}
              </FormItem>
              <Button
                type="submit"
                background={primaryColor}
                backgroundHover={secondaryColor}
                padding={"12px 16px"}
                color={secondaryColor}
                colorHover={primaryColor}
                borderColor={primaryColor}
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
  refundById: state.refundReducer.refundById,
  isLoading: state.refundReducer.isLoading,
  disabled: state.formReducer.disabled,
});

export default connect(mapStateToProps)(FormRefund);
