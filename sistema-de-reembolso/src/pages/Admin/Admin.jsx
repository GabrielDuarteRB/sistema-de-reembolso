import { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import {
  ListContainer,
  ListHeader,
  ListTitles,
} from "../../components/List/List";
import Loading from "../../components/Loading/Loading";
import Search from "../../components/Search/Search";
import Users from "../../components/Users/Users";
import { getAllUsers } from "../../store/actions/usersActions";

const Admin = ({ dispatch, users, isLoading }) => {
  useEffect(() => {
    getAllUsers(dispatch);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  console.log(users);

  return (
    <>
      <Header />
      <Container>
        {console.log(users)}
        {!users ? (
          <h2>Nenhum usuário cadastrado</h2>
        ) : (
          <>
            <ListContainer>
              <ListHeader>
                <div>
                  <h2>Usuários</h2>
                  {/* <Pager /> */}
                </div>
                <Search/>
                <ListTitles>
                  <span>Email</span>
                  <span>Id</span>
                  <span>Nome</span>
                  <span>Tipo</span>
                  <span>Editar</span>
                </ListTitles>
              </ListHeader>
              <Users />
            </ListContainer>
          </>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
  isLoading: state.usersReducer.isLoading,
});

export default connect(mapStateToProps)(Admin);
