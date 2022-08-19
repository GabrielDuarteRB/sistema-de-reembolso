import { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import {
  ListContainer,
  ListFilters,
  ListHeader,
  ListTitles,
} from "../../components/List/List";
import Loading from "../../components/Loading/Loading";
import { NotRegister } from "../../components/NotRegister/NotRegister";
import Pager from "../../components/Pager/Pager";
import RefundFinancialList from "../../components/RefundLists/RefundFinancialList";
import Search from "../../components/Search/Search";
import Status from "../../components/Status/Status";
import {
  getAllRefunds,
  getRefundByName,
} from "../../store/actions/refundActions";
import { getUser } from "../../store/actions/usersActions";

const Financier = ({
  dispatch,
  statusRefund,
  nameSearch,
  isLoading,
  refund,
  page,
  size,
}) => {
  useEffect(() => {
    getUser(dispatch);
  }, []);

  useEffect(() => {
    if (nameSearch === "" && statusRefund === "TODOS") {
      getAllRefunds(dispatch, "TODOS", page, size);
      return;
    }
    getRefundByName(dispatch, nameSearch, statusRefund, page, size);
  }, [page, size, nameSearch, statusRefund]);

  if (isLoading) {
    return <Loading height="80vh" />;
  }

  return (
    <>
      <Header title={"Financeiro"} />
      <Container>
        <ListContainer>
          <ListHeader>
            <div>
              <h2>
                Reembolsos ({statusRefund.toLowerCase().replace("_", " - ")})
              </h2>

              <Pager />
            </div>
            <ListFilters justify="end">
              <Status />
              <Search />
            </ListFilters>
          </ListHeader>

          <ListTitles columns="6">
            <strong>Título</strong>
            <strong>Nome</strong>
            <strong>Data</strong>
            <strong>Valor</strong>
            <strong>Status</strong>
            <strong>Ações</strong>
          </ListTitles>
          {refund.length === 0 ? (
            <NotRegister>Nenhum reembolso solicitado</NotRegister>
          ) : (
            <RefundFinancialList />
          )}
        </ListContainer>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.refundReducer.isLoading,
  statusRefund: state.refundReducer.statusRefund,
  nameSearch: state.refundReducer.nameSearch,
  refund: state.refundReducer.refund,
  page: state.pageReducer.page,
  size: state.pageReducer.size,
});

export default connect(mapStateToProps)(Financier);
