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
import RefundManagerList from "../../components/RefundLists/RefundManagerList";
import Search from "../../components/Search/Search";
import Status from "../../components/Status/Status";
import {
  getAllRefund,
  getRefundByName,
} from "../../store/actions/refundActions";
import { getUser } from "../../store/actions/usersActions";

const Manager = ({
  dispatch,
  statusRefund,
  nameSearch,
  isLoading,
  allRefunds,
  page,
  size,
}) => {
  useEffect(() => {
    getUser(dispatch);
  }, []);

  useEffect(() => {
    if (nameSearch === "" && statusRefund === "TODOS") {
      getAllRefund(dispatch, "TODOS", page, size);
      return;
    }
    getRefundByName(dispatch, nameSearch, statusRefund, page, size);
  }, [page, size, nameSearch, statusRefund]);

  if (isLoading) {
    return <Loading height="80vh" />;
  }

  return (
    <>
      <Header title={"Gestor"} />
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
            <span>Título</span>
            <span>Nome</span>
            <span>Data</span>
            <span>Valor</span>
            <span>Status</span>
            <span>Ações</span>
          </ListTitles>
          {allRefunds.length === 0 ? (
            <NotRegister>Nenhum reembolso solicitado</NotRegister>
          ) : (
            <RefundManagerList />
          )}
        </ListContainer>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.refundReducer.isLoading,
  nameSearch: state.refundReducer.nameSearch,
  statusRefund: state.refundReducer.statusRefund,
  allRefunds: state.refundReducer.allRefunds,
  page: state.pageReducer.page,
  size: state.pageReducer.size,
});
export default connect(mapStateToProps)(Manager);
