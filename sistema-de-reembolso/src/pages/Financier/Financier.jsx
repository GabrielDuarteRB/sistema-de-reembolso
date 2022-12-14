import { useEffect, useState } from "react";
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
  page,
  size,
  role,
}) => {

  const [startPage, setStartPage] = useState(true);

  useEffect(() => {
    getUser(dispatch);
  }, []);

  useEffect(() => {
    if(startPage) {
      chooseGet(dispatch, nameSearch, 'APROVADO_GESTOR', page, size, role);
      dispatch({ type: "SET_STATUS", statusRefund: "APROVADO_GESTOR" });
      setStartPage(false);
      return;
    };
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
              <Status defaultValue={"APROVADO_GESTOR"} />
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
  page: state.pageReducer.page,
  size: state.pageReducer.size,
  role: state.authReducer.role,
});

export default connect(mapStateToProps)(Financier);
