import moment from "moment";
import { connect } from "react-redux";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Button } from "../Button/Button";
import { ItemInfo, List, ListItem } from "../List/List";
import { FaCheckCircle, FaFileAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import {
  readUrl,
  validationButtonManager,
} from "../../store/actions/refundActions";
import { NotRegister } from "../NotRegister/NotRegister";
import { convertCurrency } from "../../utils/regex";

const RefundManagerList = ({ dispatch, statusRefund, page, size, refund }) => {
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
            {moment(reembolso.data).format("DD/MM/YYYY")}
          </ItemInfo>
          <ItemInfo>
            <strong>Valor: </strong>
            {convertCurrency(reembolso.valor)}
          </ItemInfo>
          <ItemInfo>
            <strong>Valor total:</strong>
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
                validationButtonManager(
                  dispatch,
                  size,
                  reembolso.statusDoReembolso,
                  reembolso.idReembolso,
                  page,
                  statusRefund,
                  "true",
                  "aberto",
                )
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
                validationButtonManager(
                  dispatch,
                  size,
                  reembolso.statusDoReembolso,
                  reembolso.idReembolso,
                  page,
                  statusRefund,
                  "false",
                  "aberto",
                )
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
  page: state.pageReducer.page,
  size: state.pageReducer.size,
});

export default connect(mapStateToProps)(RefundManagerList);
