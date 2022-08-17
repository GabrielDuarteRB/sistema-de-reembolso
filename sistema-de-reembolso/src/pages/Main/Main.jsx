import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import { FaExchangeAlt } from "react-icons/fa";
import {
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
import { getRefund } from "../../store/actions/refundActions";
import Refund from "../../components/Refund/Refund";

const Main = ({ name, page, size , isLoading, dispatch }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getCollaborator(dispatch);
  }, []);

  useEffect(() => {
    getRefund(dispatch, 'ABERTO', page, size)
  }, [page, size])

  if (isLoading) {
    return (<Loading />);
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
          <Refund/>
        </ListContainer>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  name: state.collaboratorReducer.name,
  isLoading: state.refundReducer.isLoading,
  page: state.pageReducer.page,
  size: state.pageReducer.size,
});
export default connect(mapStateToProps)(Main);
