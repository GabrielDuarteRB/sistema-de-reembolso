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
import Pager from "../../components/Pager/Pager";
import RefundFinancialList from "../../components/RefundLists/RefundFinancialList";
import Search from "../../components/Search/Search";
import Status from "../../components/Status/Status";
import { getUser } from "../../store/actions/usersActions";
import { chooseGet } from "../../utils/validationGetRefund";

const Financier = ({
  dispatch,
  statusRefund,
  nameSearch,
  isLoading,
  refund,
  page,
  size,
  role,
}) => {
  useEffect(() => {
    getUser(dispatch);
  }, []);

  useEffect(() => {
    chooseGet(dispatch, nameSearch, statusRefund, page, size, role);
  }, [page, size, nameSearch, statusRefund]);

  return (
    <>
      <Header title="Financeiro" actualPage="/financeiro" />
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

          <ListTitles columns="7">
            <strong>Título</strong>
            <strong>Nome</strong>
            <strong>Data</strong>
            <strong>Valor</strong>
            <strong>Total do usuário</strong>
            <strong>Status</strong>
            <strong>Ações</strong>
          </ListTitles>
          {isLoading ? <Loading /> : <RefundFinancialList />}
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
  role: state.authReducer.role,
});

export default connect(mapStateToProps)(Financier);
