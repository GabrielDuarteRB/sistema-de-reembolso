import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import { FaExchangeAlt } from "react-icons/fa";
import {
  ListContainer,
  ListFilters,
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
import Search from "../../components/Search/Search";
import Status from "../../components/Status/Status";
import RefundList from "../../components/RefundLists/RefundList";
import { chooseGet } from "../../utils/validationGetRefund";
import { convertCurrency } from "../../utils/regex";

const Reembolsos = ({
  page,
  role,
  statusRefund,
  nameSearch,
  size,
  isLoading,
  totalValue,
  dispatch,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    getUser(dispatch);
  }, []);

  useEffect(() => {
    chooseGet(dispatch, nameSearch, statusRefund, page, size, role);
  }, [page, size, nameSearch, statusRefund]);

  return (
    <>
      <Header actualPage="/reembolsos" />
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
            <ListFilters justify="end">
              <Status defaultValue={"TODOS"} />
              {role === "ROLE_ADMIN" ? (
                <Search />
              ) : (
                <span>
                  Valor total: {totalValue && convertCurrency(totalValue)}
                </span>
              )}
            </ListFilters>
          </ListHeader>

          <ListTitles columns={role === "ROLE_ADMIN" ? "7" : "5"}>
            <strong>Título</strong>
            {role === "ROLE_ADMIN" && <strong>Nome</strong>}
            <strong>Data</strong>
            <strong>Valor</strong>
            {role === "ROLE_ADMIN" && <strong>Total do usuário</strong>}
            <strong>Status</strong>
            <strong>Ações</strong>
          </ListTitles>

          {isLoading ? <Loading /> : <RefundList />}
        </ListContainer>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.refundReducer.isLoading,
  totalValue: state.usersReducer.totalValue,
  statusRefund: state.refundReducer.statusRefund,
  nameSearch: state.refundReducer.nameSearch,
  page: state.pageReducer.page,
  size: state.pageReducer.size,
  role: state.authReducer.role,
});

export default connect(mapStateToProps)(Reembolsos);
