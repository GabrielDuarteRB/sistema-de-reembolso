import { FaUserCog } from "react-icons/fa";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleRole } from "../../store/actions/authActions";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Button } from "../Button/Button";
import { ItemInfo, List, ListItem } from "../List/List";
import { NotRegister } from "../NotRegister/NotRegister";
import { confirmUpdateModal } from "../Toaster/Toaster";

const UsersList = ({ users, isLoading }) => {
  const navigate = useNavigate();

  if (users.length === 0) {
    return <NotRegister>Nenhum reembolso encontrado</NotRegister>;
  }

  console.log(users)

  return (
    <List>
      {users.map((user) => (
        <ListItem
          borderColor={secondaryColor}
          columns="4"
          mdColumns="1fr 1fr"
          smColumns="1fr"
          key={user.idUsuario}
        >
          <ItemInfo>
            <strong>Email</strong> {user.email}
          </ItemInfo>
          <ItemInfo>
            <strong>Nome</strong>
            {user.nome}
          </ItemInfo>
          <ItemInfo>
            <strong>Tipo</strong>
            {user.rolesDTO.nome.split("ROLE_")}
          </ItemInfo>

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
