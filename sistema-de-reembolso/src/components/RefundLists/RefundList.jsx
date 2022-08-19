import { connect } from "react-redux";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Button } from "../Button/Button";
import { List, ListItem } from "../List/List";
import moment from "moment";
import {
  handleDeleteRefund,
  navigateToUpdate,
} from "../../store/actions/refundActions";
import { useNavigate } from "react-router-dom";
import { confirmDeleteModal } from "../Toaster/Toaster";
import Loading from "../Loading/Loading";

const RefundList = ({
  dispatch,
  refund,
  page,
  size,
  isLoading,
  role,
}) => {
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading height="80vh" />;
  }

  return (
    <List>
      {refund.map((reembolso) => (
        <ListItem
          backgroundColor={
            reembolso.statusDoReembolso !== "aberto" ? secondaryColor : "#fff"
          }
          borderColor={
            reembolso.statusDoReembolso !== "aberto" ? "#fff" : secondaryColor
          }
          columns="5"
          key={reembolso.idReembolso}
        >
          <span>{reembolso.titulo}</span>
          <span>{moment(reembolso.dataEntrada).format("DD/MM/YYYY")}</span>
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
              onClick={() =>
                navigateToUpdate(dispatch, navigate, reembolso.idReembolso)
              }
              disabled={reembolso.statusDoReembolso !== "aberto" ? true : false}
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
                confirmDeleteModal(
                  "Tem certeza que deseja excluir?",
                  reembolso.idReembolso,
                  handleDeleteRefund,
                  dispatch,
                  page,
                  size,
                )
              }
              disabled={reembolso.statusDoReembolso !== "aberto" ? true : false}
            >
              <FaTrash />
            </Button>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => ({ 
  refund: state.refundReducer.refund,
  isLoading: state.refundReducer.isLoading,
  page: state.pageReducer.page,
  size: state.pageReducer.size,
  role: state.authReducer.role,
});

export default connect(mapStateToProps)(RefundList);
