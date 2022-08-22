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
import RefundManagerList from "../../components/RefundLists/RefundManagerList";
import Search from "../../components/Search/Search";
import Status from "../../components/Status/Status";

import { getUser } from "../../store/actions/usersActions";
import { chooseGet } from "../../utils/validationGetRefund";

const Manager = ({
  dispatch,
  statusRefund,
  nameSearch,
  isLoading,
  page,
  size,
  role,
}) => {
  useEffect(() => {
    getUser(dispatch);
    dispatch({ type: "SET_STATUS", statusRefund: "ABERTO" });
  }, []);

  useEffect(() => {
    chooseGet(dispatch, nameSearch, statusRefund, page, size, role);
  }, [page, size, nameSearch, statusRefund]);

  return (
    <>
      <Header title="Gestor" actualPage="/gestor" />
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
              <Status defaultValue={"ABERTO"} />
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
          {isLoading ? <Loading /> : <RefundManagerList />}
        </ListContainer>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.refundReducer.isLoading,
  nameSearch: state.refundReducer.nameSearch,
  statusRefund: state.refundReducer.statusRefund,
  refund: state.refundReducer.refund,
  page: state.pageReducer.page,
  size: state.pageReducer.size,
  role: state.authReducer.role,
});
export default connect(mapStateToProps)(Manager);
