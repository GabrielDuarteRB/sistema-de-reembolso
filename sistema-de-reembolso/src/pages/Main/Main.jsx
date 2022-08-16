import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import { FaTrash, FaEdit, FaExchangeAlt } from "react-icons/fa";
import {
  List,
  ListContainer,
  ListHeader,
  ListTitles,
} from "../../components/List/List";
import Pager from "../../components/Pager/Pager";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { useEffect } from "react";
import { getCollaborator } from "../../store/actions/collaboratorActions";
import { connect } from "react-redux";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const Main = ({ name, isLoading, dispatch }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getCollaborator(dispatch);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header nome={name} />
      <Container>
        <Button
          background={primaryColor}
          backgroundHover={secondaryColor}
          padding={"12px 16px"}
          color={secondaryColor}
          colorHover={primaryColor}
          borderColor={primaryColor}
          onClick={() => navigate("/solicitar-reembolso")}
        >
          Solicitar reembolso <FaExchangeAlt />
        </Button>

        <ListContainer>
          <ListHeader>
            <div>
              <h2>Reembolsos</h2>
              <Pager />
            </div>
            <ListTitles>
              <span>Título</span>
              <span>Data</span>
              <span>Valor</span>
              <span>Situação</span>
              <span>Ações</span>
            </ListTitles>
          </ListHeader>
          <List>
            <li>
              <span>Reembolso referente a almoço</span>
              <span>13/08/2022</span>
              <span>R$ 20,00</span>
              <span>reprovado financeiro</span>
              <div>
                <Button
                  background={primaryColor}
                  backgroundHover={secondaryColor}
                  color={secondaryColor}
                  colorHover={primaryColor}
                  borderColor={primaryColor}
                  padding={"8px"}
                >
                  <FaEdit />
                </Button>
                <Button
                  background={primaryColor}
                  backgroundHover={secondaryColor}
                  color={secondaryColor}
                  colorHover={primaryColor}
                  borderColor={primaryColor}
                  padding={"8px"}
                >
                  <FaTrash />
                </Button>
              </div>
            </li>
            <li>
              <span>Reembolso</span>
              <span>13/08/2022</span>
              <span>R$ 20,00</span>
              <span>reprovado financeiro</span>
              <div>
                <Button
                  background={primaryColor}
                  backgroundHover={secondaryColor}
                  color={secondaryColor}
                  colorHover={primaryColor}
                  borderColor={primaryColor}
                  padding={"8px"}
                >
                  <FaEdit />
                </Button>
                <Button
                  background={primaryColor}
                  backgroundHover={secondaryColor}
                  color={secondaryColor}
                  colorHover={primaryColor}
                  borderColor={primaryColor}
                  padding={"8px"}
                >
                  <FaTrash />
                </Button>
              </div>
            </li>
            <li>
              <span>Reembolso</span>
              <span>13/08/2022</span>
              <span>R$ 20,00</span>
              <span>reprovado financeiro</span>
              <div>
                <Button
                  background={primaryColor}
                  backgroundHover={secondaryColor}
                  color={secondaryColor}
                  colorHover={primaryColor}
                  borderColor={primaryColor}
                  padding={"8px"}
                >
                  <FaEdit />
                </Button>
                <Button
                  background={primaryColor}
                  backgroundHover={secondaryColor}
                  color={secondaryColor}
                  colorHover={primaryColor}
                  borderColor={primaryColor}
                  padding={"8px"}
                >
                  <FaTrash />
                </Button>
              </div>
            </li>
          </List>
        </ListContainer>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.collaboratorReducer.isLoading,
  name: state.collaboratorReducer.name,
});
export default connect(mapStateToProps)(Main);
