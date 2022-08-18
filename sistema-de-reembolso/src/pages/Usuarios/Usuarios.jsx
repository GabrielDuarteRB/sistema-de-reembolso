import { useEffect } from "react";
import { FaSearch, FaUserPlus } from "react-icons/fa";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import {
  ListContainer,
  ListHeader,
  ListTitles,
} from "../../components/List/List";
import Loading from "../../components/Loading/Loading";
import Pager from "../../components/Pager/Pager";
import Users from "../../components/Users/Users";
import { getAllUsers, getUser } from "../../store/actions/usersActions";
import { primaryColor, secondaryColor } from "../../utils/colors";
import Search from "../../components/Search/Search";

const Usuarios = ({ dispatch, users, isLoading, page, size }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getUser(dispatch);
  }, []);

  useEffect(() => {
    getAllUsers(dispatch, page, size);
  }, [page, size]);

  if (isLoading) {
    return <Loading />;
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
                <Pager />
              </div>
              <Search />
              <ListTitles columns="4">
                <span>Email</span>
                <span>Nome</span>
                <span>Tipo</span>
                <span>Editar</span>
              </ListTitles>
            </ListHeader>
            {!users ? <h2>Nenhum usuário cadastrado</h2> : <Users />}
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
