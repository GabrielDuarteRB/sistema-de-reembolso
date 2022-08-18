import { useEffect, useState } from "react";
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
import RefundManager from "../../components/Refund/RefundManager";
import Search from "../../components/Search/Search";
import { getAllRefund, getRefund, getRefundByName } from "../../store/actions/refundActions";
import { getUser } from "../../store/actions/usersActions";

const Manager = ({ dispatch, isLoading, refund, page, size }) => {

  const [nameSearch, setNameSearch] = useState('')

  useEffect(() => {
    getUser(dispatch);
  }, []);

  useEffect(() => {
    if(nameSearch === ''){
      console.log('teste1')
      getRefund(dispatch, "TODOS", page, size);
      return
    }
    console.log('teste2')
    getRefundByName(dispatch, nameSearch, "TODOS", page, size)
  }, [page, size, nameSearch]);

  console.log(refund)

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
                <Search setNameSearch={setNameSearch}/>
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
