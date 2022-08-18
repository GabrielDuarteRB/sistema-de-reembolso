import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import {
  ListContainer,
  ListHeader,
  ListTitles,
} from "../../components/List/List";
import Loading from "../../components/Loading/Loading";
import Users from "../../components/Users/Users";
import { getAllUsers } from "../../store/actions/usersActions";
import { primaryColor, secondaryColor } from "../../utils/colors";

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
        {users.length === 0 ? (
          <h2>Nenhum usuário cadastrado</h2>
        ) : (
          <>
            <ListContainer>
              <ListHeader>
                <div>
                  <h2>Usuários</h2>
                  {/* <Pager /> */}
                </div>
                <form>
                  <input type="text" placeholder="Filtar por nome" />
                  <Button
                    background={primaryColor}
                    backgroundHover={secondaryColor}
                    color={secondaryColor}
                    colorHover={primaryColor}
                    borderColor={primaryColor}
                    padding={"4px"}
                  >
                    <FaSearch />
                  </Button>
                </form>
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
