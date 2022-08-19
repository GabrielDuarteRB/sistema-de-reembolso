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
  getUser,
} from "../../store/actions/usersActions";
import { primaryColor, secondaryColor } from "../../utils/colors";
import Search from "../../components/Search/Search";
import UsersList from "../../components/UsersList/UsersList";
import { chooseGetUsers } from "../../utils/validationGetRefund";
import { navigateToPages } from "../../store/actions/pageActions";

const Usuarios = ({ dispatch, nameSearch, users, isLoading, page, size }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getUser(dispatch);
  }, []);

  useEffect(() => {
    chooseGetUsers(dispatch, nameSearch, page, size)
  }, [page, size, nameSearch]);

  return (
    <>
      <Header />
      <Container>
        <Button
          background={primaryColor}
          backgroundHover={secondaryColor}
          padding={"12px 16px"}
          color={secondaryColor}
          colorHover={primaryColor}
          borderColor={primaryColor}
          onClick={() => navigateToPages(dispatch, navigate, '/cadastro')}
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
            {isLoading
              ? 
                <Loading/> 
              :
                <UsersList />
            }
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
