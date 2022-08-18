import moment from "moment";
import { connect } from "react-redux";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Button } from "../Button/Button";
import { List, ListItem } from "../List/List";
import { FaCheckCircle, FaFileAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { managerAprove, readUrl } from "../../store/actions/refundActions";

const RefundManagerList = ({ dispatch, page, size, refund }) => {
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
                managerAprove(
                  dispatch,
                  reembolso.idReembolso,
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
                managerAprove(
                  dispatch,
                  reembolso.idReembolso,
                  "false",
                  page,
                  size,
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
  page: state.pageReducer.page,
  size: state.pageReducer.size,
});

export default connect(mapStateToProps)(RefundManagerList);
