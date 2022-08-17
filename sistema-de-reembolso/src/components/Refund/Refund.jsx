import { connect } from "react-redux";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import moment from "moment";
import {
  handleDeleteRefund,
  navigateToUpdate,
} from "../../store/actions/refundActions";
import { useNavigate } from "react-router-dom";
import { confirmModal } from "../Toaster/Toaster";

const Refund = ({ dispatch, refund, page, size }) => {
  const navigate = useNavigate();

  return (
    <List>
      {refund.map((reembolso) => (
        <li key={reembolso.idReembolso}>
          <span>{reembolso.titulo}</span>
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
              onClick={() => navigateToUpdate(dispatch, navigate, reembolso.idReembolso)}
            >
              <FaEdit />
            </Button>
            <Button
              background={primaryColor}
              backgroundHover={secondaryColor}
              color={secondaryColor}
              colorHover={primaryColor}
              borderColor={primaryColor}
              padding={"8px"}
              onClick={() =>
                confirmModal(
                  "Tem certeza que deseja excluir?",
                  reembolso.idReembolso,
                  handleDeleteRefund,
                  dispatch,
                  page,
                  size
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
export default connect(mapStateToProps)(Refund);
