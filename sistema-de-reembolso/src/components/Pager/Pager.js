import { PaginationContainer } from "./Pager.styled";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { connect } from "react-redux";
import {
  modifyItensPerPage,
  modifyPage,
} from "../../store/actions/pageActions";

const Pager = ({ dispatch, refund, users, size, page, totalPages, isLoadingRefund, isLoadingUsers }) => {

  if(refund.length === 0 && users.length === 0) {
    return
  }

  return (
    <PaginationContainer>
      <div>
        <span>Itens por página</span>
        <select
          onChange={(e) => modifyItensPerPage(e, dispatch)}
          name="itens"  
          value={size}
          disabled={isLoadingRefund && isLoadingUsers}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <div>
        <span>
          Página: {page + 1} de {totalPages}
        </span>
        {page >= 1 ? (
          <button disabled={isLoadingRefund && isLoadingUsers} onClick={() => modifyPage(dispatch, page, "less")}>
            <FaArrowLeft />
          </button>
        ) : null}
        {page + 1 !== totalPages ? (
          <button disabled={isLoadingRefund  && isLoadingUsers} onClick={() => modifyPage(dispatch, page, "sum")}>
            <FaArrowRight />
          </button>
        ) : null}
      </div>
    </PaginationContainer>
  );
};

const mapStateToProps = (state) => ({
  refund: state.refundReducer.refund,
  isLoadingRefund: state.refundReducer.isLoading,
  users: state.usersReducer.users,
  isLoadingUsers: state.usersReducer.isLoading,
  page: state.pageReducer.page,
  totalPages: state.pageReducer.totalPages,
  size: state.pageReducer.size,
});
export default connect(mapStateToProps)(Pager);
