import { useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import {
  ListContainer,
  ListFilters,
  ListHeader,
  ListTitles,
} from "../../components/List/List";
import Loading from "../../components/Loading/Loading";
import Pager from "../../components/Pager/Pager";
import {
  getAllUsers,
  getUser,
  getUsersByName,
} from "../../store/actions/usersActions";
import { primaryColor, secondaryColor } from "../../utils/colors";
import Search from "../../components/Search/Search";
import UsersList from "../../components/UsersList/UsersList";

const Usuarios = ({ dispatch, nameSearch, users, isLoading, page, size }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getUser(dispatch);
  }, []);

  useEffect(() => {
    if (nameSearch === "") {
      getAllUsers(dispatch, page, size);
      return;
    }
    getUsersByName(dispatch, nameSearch, page, size);
  }, [page, size, nameSearch]);

  if (isLoading) {
    return <Loading height="80vh" />;
  }

  return (
    <>
      <Header title={"Usuários"} />
      <Container>
        <Button
          background={primaryColor}
          backgroundHover={secondaryColor}
          padding={"12px 16px"}
          color={secondaryColor}
          colorHover={primaryColor}
          borderColor={primaryColor}
          onClick={() => navigate("/cadastro/byAdmin")}
        >
          Cadastrar usuário <FaUserPlus />
        </Button>

        <>
          <ListContainer>
            <ListHeader>
              <div>
                <h2>Usuários</h2>
              </div>
              <ListFilters justify="space-between">
                <Search />
                <Pager />
              </ListFilters>
            </ListHeader>

            <ListTitles columns="4">
              <span>Email</span>
              <span>Nome</span>
              <span>Tipo</span>
              <span>Editar</span>
            </ListTitles>
            {!users ? <h2>Nenhum usuário cadastrado</h2> : <UsersList />}
          </ListContainer>
        </>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
  isLoading: state.usersReducer.isLoading,
  page: state.pageReducer.page,
  size: state.pageReducer.size,
  nameSearch: state.refundReducer.nameSearch,
});

export default connect(mapStateToProps)(Usuarios);
