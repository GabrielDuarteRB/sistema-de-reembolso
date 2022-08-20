import { connect } from "react-redux";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { FaTrash, FaEdit, FaFileAlt } from "react-icons/fa";
import { Button } from "../Button/Button";
import { ItemInfo, List, ListItem } from "../List/List";
import moment from "moment";
import { navigateToUpdate, readUrl } from "../../store/actions/refundActions";
import { useNavigate } from "react-router-dom";
import { confirmDeleteModal } from "../Toaster/Toaster";
import { NotRegister } from "../NotRegister/NotRegister";
import { convertCurrency } from "../../utils/regex";

const RefundList = ({
  dispatch,
  refund,
  page,
  size,
  nameSearch,
  statusRefund,
  role,
}) => {
  const navigate = useNavigate();
  if (refund.length === 0) {
    return <NotRegister>Nenhum reembolso encontrado</NotRegister>;
  }

  const gridArea7Cols = `"first first sixth" "second third fourth" "fifth fifth actions"`;
  const gridArea5Cols = `"first first fourth" "second third actions"`;

  return (
    <List>
      {refund.map((reembolso) => (
        <ListItem
          backgroundColor={
            reembolso.statusDoReembolso !== "aberto" ? "#dcdde1" : "#fff"
          }
          borderColor={
            reembolso.statusDoReembolso !== "aberto" ? "#fff" : secondaryColor
          }
          columns={role === "ROLE_ADMIN" ? "7" : "5"}
          key={reembolso.idReembolso}
          gridArea={role === "ROLE_ADMIN" ? gridArea7Cols : gridArea5Cols}
        >
          <ItemInfo>
            <strong>Titulo: </strong>
            {reembolso.titulo}
          </ItemInfo>
          {role === "ROLE_ADMIN" && (
            <ItemInfo>
              <strong>Nome: </strong>
              {reembolso.usuario.nome}
            </ItemInfo>
          )}
          <ItemInfo>
            <strong>Data: </strong>
            {moment(reembolso.dataEntrada).format("DD/MM/YYYY")}
          </ItemInfo>
          <ItemInfo>
            <strong>Valor: </strong>
            {convertCurrency(reembolso.valor)}
          </ItemInfo>
          {role === "ROLE_ADMIN" && (
            <ItemInfo>
              <strong>Total do usuário: </strong>
              {convertCurrency(reembolso.usuario.valorTotal)}
            </ItemInfo>
          )}
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
                navigateToUpdate(dispatch, navigate, reembolso.idReembolso)
              }
              disabled={
                role === "ROLE_ADMIN"
                  ? false
                  : reembolso.statusDoReembolso !== "aberto"
                  ? true
                  : false
              }
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
                  dispatch,
                  page,
                  size,
                  reembolso.usuario.idUsuario,
                  nameSearch,
                  statusRefund,
                  role,
                )
              }
              disabled={
                role === "ROLE_ADMIN"
                  ? false
                  : reembolso.statusDoReembolso !== "aberto"
                  ? true
                  : false
              }
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
  statusRefund: state.refundReducer.statusRefund,
  nameSearch: state.refundReducer.nameSearch,
  page: state.pageReducer.page,
  size: state.pageReducer.size,
  role: state.authReducer.role,
});

export default connect(mapStateToProps)(RefundList);
