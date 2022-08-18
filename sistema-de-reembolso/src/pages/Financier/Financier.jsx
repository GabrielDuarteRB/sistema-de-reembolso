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
import Pager from "../../components/Pager/Pager";
import RefundFinancier from "../../components/Refund/RefundFinancier";
import Search from "../../components/Search/Search";
import { getAllRefund } from "../../store/actions/refundActions";
import { getUser } from "../../store/actions/usersActions";

const Financier = ({ dispatch, isLoading, refund, page, size }) => {
  useEffect(() => {
    getUser(dispatch);
  }, []);

  useEffect(() => {
    getAllRefund(dispatch, "APROVADO_GESTOR", page, size);
  }, [page, size]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header title={"Financeiro"} />
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
                <Search />
                <ListTitles columns="6">
                  <span>Título</span>
                  <span>Nome</span>
                  <span>Data</span>
                  <span>Valor</span>
                  <span>Status</span>
                  <span>Ações</span>
                </ListTitles>
              </ListHeader>
              <RefundFinancier />
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

export default connect(mapStateToProps)(Financier);
