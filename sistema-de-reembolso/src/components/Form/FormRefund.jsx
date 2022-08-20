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
  const [selectedFile, setSelectedFile] = useState("Nenhum anexo selecionado");

  const handleFile = (file, setFieldValue) => {
    setFieldValue("file", file);
    setSelectedFile(file.name);
  };

  useEffect(() => {
    !idRefund && dispatch({ type: "LOADING_FALSE" });
    if (idRefund) {
      getRefundById(dispatch, idRefund);
    }
  }, []);


  useEffect(() => {
    refundById.anexoDTO && setSelectedFile(refundById.anexoDTO.nome);
  }, [refundById.anexoDTO]);

  if (isLoading) {
    return <Loading height="80vh" />;
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
            titulo: refundById ? refundById.titulo : "",
            valor: refundById.valor || "",
            file: refundById.anexoDTO
              ? new File([refundById.anexoDTO.file], refundById.anexoDTO.nome, {
                  type: "file",
                })
              : "",
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
              ? handleUpdateRefund(dispatch, newValues, idRefund, refundById.usuario.idUsuario, navigate)
              : handleCreateRefund(dispatch, newValues, navigate);
          }}
        >
          {({ errors, touched, handleSubmit, values, setFieldValue }) => (
            <FieldForm onSubmit={handleSubmit} encType="multipart/form-data">
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
                  <small>{selectedFile || "Nenhum anexo selecionado"}</small>

                  <div>
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

                    <button
                      type="button"
                      onClick={() => handleFile("", setFieldValue)}
                    >
                      <FaTrash />
                    </button>
                  </div>
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
        <Link to="/reembolsos">
          <FaRegArrowAltCircleLeft />
          Voltar para a tela de reembolsos
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