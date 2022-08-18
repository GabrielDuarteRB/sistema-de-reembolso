import moment from "moment";
import { connect } from "react-redux";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import { FaCheckCircle, FaTrash, FaFileDownload } from "react-icons/fa";
import { financierAprove } from "../../store/actions/refundActions";

const RefundManager = ({ dispatch, page, size, refund }) => {
  return (
    <List>
      {refund.map((rembolso) => (
        <li key={rembolso.idReembolso}>
          <span>{rembolso.titulo}</span>
          <span>{rembolso.usuario.nome}</span>
          <span>{moment(rembolso.data).format("DD/MM/YYYY")}</span>
          <span>R$ {parseFloat(rembolso.valor).toFixed(2)}</span>

          <div>
            <Button
              background={primaryColor}
              backgroundHover={secondaryColor}
              color={secondaryColor}
              colorHover={primaryColor}
              borderColor={primaryColor}
              padding={"8px"}
              onClick={() => {
                const blob = new Blob([rembolso.anexoDTO.data], {
                  type: rembolso.anexoDTO.tipo,
                });
                const url = window.URL.createObjectURL(blob);
                window.open(url);
              }}
            >
              Anexo <FaFileDownload />
            </Button>

            <Button
              background={primaryColor}
              backgroundHover={secondaryColor}
              color={secondaryColor}
              colorHover={primaryColor}
              borderColor={primaryColor}
              padding={"8px"}
              onClick={() =>
                financierAprove(
                  dispatch,
                  rembolso.idReembolso,
                  "true",
                  page,
                  size,
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
                financierAprove(
                  dispatch,
                  rembolso.idReembolso,
                  "false",
                  page,
                  size,
                )
              }
            >
              <FaTrash />
            </Button>
          </div>
        </li>
      ))}
    </List>
  );
};
const mapStateToProps = (state) => ({
  refund: state.refundReducer.refund,
  page: state.pageReducer.page,
  size: state.pageReducer.size,
});
export default connect(mapStateToProps)(RefundManager);
