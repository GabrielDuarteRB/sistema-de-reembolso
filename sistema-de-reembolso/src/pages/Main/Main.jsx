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
import { useEffect, useState } from "react";
import { getUser } from "../../store/actions/usersActions";
import { connect } from "react-redux";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { getRefund, getRefundByName } from "../../store/actions/refundActions";
import Refund from "../../components/Refund/Refund";
import Search from "../../components/Search/Search";

const Main = ({ page, size, isLoadingRefund, refund, dispatch }) => {
  const navigate = useNavigate();
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

  if (isLoadingRefund) {
    return <Loading />;
  }

  return (
    <>
      <Header title={"Reembolsos"} />
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

        {refund.length === 0 ? (
          <h2>Nenhum reembolso solicitado</h2>
        ) : (
          <>
            <ListContainer>
              <ListHeader>
                <div>
                  <h2>Reembolsos</h2>
                  <Pager />
                </div>
                <Search setNameSearch={setNameSearch}/>
                <ListTitles columns="6">
                  <span>Título</span>
                  <span>Data</span>
                  <span>Valor</span>
                  <span>Status</span>
                  <span>Ações</span>
                </ListTitles>
              </ListHeader>
              <Refund />
            </ListContainer>
          </>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoadingRefund: state.refundReducer.isLoading,
  isLoadingUser: state.usersReducer.isLoading,
  foto: state.usersReducer.foto,
  page: state.pageReducer.page,
  size: state.pageReducer.size,
  refund: state.refundReducer.refund,
});
export default connect(mapStateToProps)(Main);
