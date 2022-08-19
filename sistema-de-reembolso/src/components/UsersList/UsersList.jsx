import { FaUserCog } from "react-icons/fa";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleRole } from "../../store/actions/authActions";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Button } from "../Button/Button";
import { List, ListItem } from "../List/List";
import { NotRegister } from "../NotRegister/NotRegister";
import { confirmUpdateModal } from "../Toaster/Toaster";

const UsersList = ({ users, isLoading }) => {
  const navigate = useNavigate();

  if (users.length === 0) {
    return <NotRegister>Nenhum reembolso encontrado</NotRegister>
  }

  return (
    <List>
      {users.map((user) => (
        <ListItem borderColor={secondaryColor} columns="4" key={user.idUsuario}>
          <span>{user.email}</span>
          <span>{user.nome}</span>
          <span>{user.rolesDTO.nome.split("ROLE_")}</span>

          <Button
            background={primaryColor}
            backgroundHover={secondaryColor}
            color={secondaryColor}
            colorHover={primaryColor}
            borderColor={primaryColor}
            padding={"8px"}
            onClick={() =>
              confirmUpdateModal(user.idUsuario, handleRole, navigate)
            }
          >
            Alterar tipo
            <FaUserCog />
          </Button>
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
