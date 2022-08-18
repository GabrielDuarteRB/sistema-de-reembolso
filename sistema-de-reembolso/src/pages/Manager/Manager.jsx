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
import Pager from "../../components/Pager/Pager";
import RefundManager from "../../components/Refund/RefundManager";
import { getAllRefund } from "../../store/actions/refundActions";
import { getUser } from "../../store/actions/usersActions";
import { primaryColor, secondaryColor } from "../../utils/colors";

const Manager = ({ dispatch, isLoading, refund, page, size }) => {
  useEffect(() => {
    getUser(dispatch);
  }, []);

  useEffect(() => {
    getAllRefund(dispatch, "ABERTO", page, size);
  }, [page, size]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Container>
        {refund.length === 0 ? (
          <h2>Nenhum reembolso solicitado</h2>
        ) : (
          <>
            <ListContainer>
              <ListHeader>
                <div>
                  <h2>Reembolsos em aberto</h2>
                  <Pager />
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
                  <span>Título</span>
                  <span>Data</span>
                  <span>Valor</span>
                  <span>Situação</span>
                  <span>Ações</span>
                </ListTitles>
              </ListHeader>
              <RefundManager />
            </ListContainer>
          </>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.refundReducer.isLoading,
  refund: state.refundReducer.refund,
  page: state.pageReducer.page,
  size: state.pageReducer.size,
});
export default connect(mapStateToProps)(Manager);
