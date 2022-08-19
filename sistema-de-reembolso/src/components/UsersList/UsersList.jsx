import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleRole } from "../../store/actions/authActions";
import { secondaryColor } from "../../utils/colors";
import { List, ListItem } from "../List/List";
import Loading from "../Loading/Loading";
import { confirmUpdateModal } from "../Toaster/Toaster";

const UsersList = ({ users, isLoading }) => {
  const navigate = useNavigate();
  if (isLoading) {
    return <Loading height="80vh" />;
  }

  return (
    <List>
      {users.map((user) => (
        <ListItem borderColor={secondaryColor} columns="4" key={user.idUsuario}>
          <span>{user.email}</span>
          <span>{user.nome}</span>
          <span>{user.rolesDTO.nome.split("ROLE_")}</span>
          <select
            name="tipoUser"
            onChange={(e) =>
              confirmUpdateModal(
                "Confirmar alteração?",
                user.idUsuario,
                handleRole,
                e.target.value,
                navigate,
              )
            }
          >
            <option
              defaultValue
              hidden
              value={user.rolesDTO.nome.split("ROLE_")}
            >
              {user.rolesDTO.nome.split("ROLE_")}
            </option>
            <option value="COLABORADOR">COLABORADOR</option>
            <option value="GESTOR">GESTOR</option>
            <option value="FINANCEIRO">FINANCEIRO</option>
            <option value="ADMINISTRADOR">ADMINISTRADOR</option>
          </select>
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
  isLoading: state.usersReducer.isLoading,
});

export default connect(mapStateToProps)(UsersList);
