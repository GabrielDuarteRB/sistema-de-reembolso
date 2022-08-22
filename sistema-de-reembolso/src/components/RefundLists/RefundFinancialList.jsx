import moment from "moment";
import { connect } from "react-redux";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Button } from "../Button/Button";
import { ItemInfo, List, ListItem } from "../List/List";
import { FaCheckCircle, FaFileAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import {
  readUrl,
  validationButtonFinancer,
} from "../../store/actions/refundActions";
import { NotRegister } from "../NotRegister/NotRegister";
import { convertCurrency } from "../../utils/regex";

const RefundFinancialList = ({
  dispatch,
  statusRefund,
  page,
  size,
  refund,
  nameSearch,
  itensPerPage
}) => {
  if (refund.length === 0) {
    return <NotRegister>Nenhum reembolso encontrado</NotRegister>;
  }

  return (
    <List>
      {refund.map((reembolso) => (
        <ListItem
          borderColor={
            reembolso.statusDoReembolso !== "aberto" ? "#fff" : secondaryColor
          }
          columns="7"
          key={reembolso.idReembolso}
          gridArea={`"first first sixth" "second third fourth" "fifth fifth actions"`}
        >
          <ItemInfo>
            <strong>Titulo: </strong>
            {reembolso.titulo}
          </ItemInfo>
          <ItemInfo>
            <strong>Nome: </strong>
            {reembolso.usuario.nome}
          </ItemInfo>
          <ItemInfo>
            <strong>Data: </strong>
            {moment(reembolso.dataEntrada).format("DD/MM/YYYY")}
          </ItemInfo>
          <ItemInfo>
            <strong>Valor: </strong>
            {convertCurrency(reembolso.valor)}
          </ItemInfo>
          <ItemInfo>
            <strong>Total do usuário:</strong>
            {convertCurrency(reembolso.usuario.valorTotal)}
          </ItemInfo>
          <ItemInfo>
            <strong>Status: </strong>
            {reembolso.statusDoReembolso}
          </ItemInfo>
          <div>
            <Button
              background={primaryColor}
              backgroundHover={secondaryColor}
              color={secondaryColor}
              colorHover={primaryColor}
              borderColor={primaryColor}
              padding={"8px"}
              onClick={() => {
                readUrl(reembolso);
              }}
            >
              <FaFileAlt />
            </Button>

            <Button
              background={primaryColor}
              backgroundHover={secondaryColor}
              color={secondaryColor}
              colorHover={primaryColor}
              borderColor={primaryColor}
              padding={"8px"}
              onClick={() =>
                validationButtonFinancer(
                  dispatch,
                  size,
                  reembolso.statusDoReembolso,
                  reembolso.idReembolso,
                  page,
                  statusRefund,
                  nameSearch,
                  itensPerPage,
                  "true",
                  "aprovado gestor",
                )
              }
              disabled={
                reembolso.statusDoReembolso !== "aprovado gestor" ? true : false
              }
            >
              <FaCheckCircle />
            </Button>

            <Button
              background={primaryColor}
              backgroundHover={secondaryColor}
              color={secondaryColor}
              colorHover={primaryColor}
              borderColor={primaryColor}
              padding={"8px"}
              onClick={() =>
                validationButtonFinancer(
                  dispatch,
                  size,
                  reembolso.statusDoReembolso,
                  reembolso.idReembolso,
                  page,
                  statusRefund,
                  nameSearch,
                  itensPerPage,
                  "false",
                  "aprovado gestor",
                )
              }
              disabled={
                reembolso.statusDoReembolso !== "aprovado gestor" ? true : false
              }
            >
              <MdCancel fontSize={"18px"} />
            </Button>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => ({
  refund: state.refundReducer.refund,
  statusRefund: state.refundReducer.statusRefund,
  nameSearch: state.refundReducer.nameSearch,
  page: state.pageReducer.page,
  size: state.pageReducer.size,
  itensPerPage: state.pageReducer.itensPerPage,
});

export default connect(mapStateToProps)(RefundFinancialList);
