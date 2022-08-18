import { FaEdit } from "react-icons/fa";
import { connect } from "react-redux";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Button } from "../Button/Button";
import { List, ListItem } from "../List/List";
import Loading from "../Loading/Loading";

const Users = ({ users, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <List>
      {users.map((user) => (
        <ListItem columns="4" key={user.idUsuario}>
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
            // onClick={() =>
            //   navigateToUpdate(dispatch, navigate, reembolso.idReembolso)
            // }
          >
            <FaEdit />
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

export default connect(mapStateToProps)(Users);
