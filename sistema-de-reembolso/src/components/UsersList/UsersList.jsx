import { FaUserCog } from "react-icons/fa";
import { connect } from "react-redux";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { convertCurrency } from "../../utils/regex";
import { Button } from "../Button/Button";
import { ItemInfo, List, ListItem } from "../List/List";
import { NotRegister } from "../NotRegister/NotRegister";
import { confirmUpdateModal } from "../Toaster/Toaster";

const UsersList = ({ dispatch, users, nameSearch, page, size }) => {
  if (users.length === 0) {
    return <NotRegister>Nenhum reembolso encontrado</NotRegister>;
  }

  return (
    <List>
      {users.map((user) => (
        <ListItem
          borderColor={secondaryColor}
          columns="5"
          mdColumns="1fr 1fr"
          gridArea={`"first first"
                     "second third" 
                     "fourth actions"`}
          key={user.idUsuario}
        >
          <ItemInfo>
            <strong>Email:</strong>
            {user.email}
          </ItemInfo>
          <ItemInfo>
            <strong>Nome:</strong>
            {user.nome}
          </ItemInfo>
          <ItemInfo>
            <strong>Total do usuário:</strong>
            {convertCurrency(user.valorTotal)}
          </ItemInfo>
          <ItemInfo>
            <strong>Tipo:</strong>
            {user.rolesDTO.nome.split("ROLE_")}
          </ItemInfo>

          <div>
            <Button
              background={primaryColor}
              backgroundHover={secondaryColor}
              color={secondaryColor}
              colorHover={primaryColor}
              borderColor={primaryColor}
              padding={"8px"}
              onClick={() =>
                confirmUpdateModal(
                  user.idUsuario,
                  dispatch,
                  nameSearch,
                  page,
                  size,
                )
              }
            >
              Alterar tipo
              <FaUserCog />
            </Button>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
  page: state.pageReducer.page,
  size: state.pageReducer.size,
  nameSearch: state.refundReducer.nameSearch,
});

export default connect(mapStateToProps)(UsersList);
