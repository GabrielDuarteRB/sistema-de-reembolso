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

const Refund = ({ dispatch, refund }) => {
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
              onClick={() => navigateToUpdate(navigate, reembolso.idReembolso)}
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
});
export default connect(mapStateToProps)(Refund);
