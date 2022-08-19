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
import { getUser } from "../../store/actions/usersActions";
import { connect } from "react-redux";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import {
  getAllRefund,
  getRefundByName,
} from "../../store/actions/refundActions";
import Search from "../../components/Search/Search";
import Status from "../../components/Status/Status";
import { NotRegister } from "../../components/NotRegister/NotRegister";
import RefundList from "../../components/RefundLists/RefundList";

const Reembolsos = ({
  page,
  role,
  statusRefund,
  nameSearch,
  size,
  isLoadingRefund,
  refund,
  dispatch,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    getUser(dispatch);
  }, []);

  useEffect(() => {
    if (nameSearch === "") {
      getAllRefund(dispatch, statusRefund, page, size);
      return;
    }
    getRefundByName(dispatch, nameSearch, statusRefund, page, size);
  }, [page, size, nameSearch, statusRefund]);

  if (isLoadingRefund) {
    return <Loading />;
  }

  return (
    <>
      <Header />
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
            <Status />
            {role === "ROLE_ADMIN" ? <Search /> : null}

            <ListTitles columns="5">
              <span>Título</span>
              <span>Data</span>
              <span>Valor</span>
              <span>Status</span>
              <span>Ações</span>
            </ListTitles>
          </ListHeader>
          {refund.length === 0 ? (
            <NotRegister>Nenhum reembolso solicitado</NotRegister>
          ) : (
            <RefundList />
          )}
        </ListContainer>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoadingRefund: state.refundReducer.isLoading,
  refund: state.refundReducer.refund,
  statusRefund: state.refundReducer.statusRefund,
  nameSearch: state.refundReducer.nameSearch,
  page: state.pageReducer.page,
  size: state.pageReducer.size,
  role: state.authReducer.role,
});
export default connect(mapStateToProps)(Reembolsos);
