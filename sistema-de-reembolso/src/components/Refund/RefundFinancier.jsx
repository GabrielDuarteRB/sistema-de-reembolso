import moment from "moment";
import { connect } from "react-redux";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Button } from "../Button/Button";
import { List, ListItem } from "../List/List";
import { FaCheckCircle, FaFileAlt } from "react-icons/fa"
import { MdCancel } from "react-icons/md";
import { validationButtonFinancer } from "../../store/actions/refundActions";

const RefundManager = ({ dispatch, statusRefund, page, size, refund }) => {
  return (
    <List>
      {refund.map((reembolso) => (
        <ListItem columns="6" key={reembolso.idReembolso}>
          <span>{reembolso.titulo}</span>
          <span>{reembolso.usuario.nome}</span>
          <span>{moment(reembolso.data).format("DD/MM/YYYY")}</span>
          <span>R$ {parseFloat(reembolso.valor).toFixed(2)}</span>
          <span>{reembolso.statusDoReembolso}</span>
          <div>
            <Button
              background={primaryColor}
              backgroundHover={secondaryColor}
              color={secondaryColor}
              colorHover={primaryColor}
              borderColor={primaryColor}
              padding={"8px"}
              onClick={() => {
                const blob = new Blob([reembolso.anexoDTO.data], {
                  type: reembolso.anexoDTO.tipo,
                });
                const url = window.URL.createObjectURL(blob);
                window.open(url);
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
                  dispatch, size, reembolso.statusDoReembolso, 
                    reembolso.idReembolso, page, statusRefund, 'true', 'aprovado gestor'
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
                validationButtonFinancer(
                  dispatch, size, reembolso.statusDoReembolso, 
                    reembolso.idReembolso, page, statusRefund, 'false', 'aprovado gestor'
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
export default connect(mapStateToProps)(RefundManager);
