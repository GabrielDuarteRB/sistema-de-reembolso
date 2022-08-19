import { PaginationContainer } from "./Pager.styled";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { connect } from "react-redux";
import {
  modifyItensPerPage,
  modifyPage,
} from "../../store/actions/pageActions";

const Pager = ({ dispatch, refund, users, size, page, totalPages }) => {

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
          defaultValue={size}
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
          <button onClick={() => modifyPage(dispatch, page, "less")}>
            <FaArrowLeft />
          </button>
        ) : null}
        {page + 1 !== totalPages ? (
          <button onClick={() => modifyPage(dispatch, page, "sum")}>
            <FaArrowRight />
          </button>
        ) : null}
      </div>
    </PaginationContainer>
  );
};

const mapStateToProps = (state) => ({
  refund: state.refundReducer.refund,
  users: state.usersReducer.users,
  page: state.pageReducer.page,
  totalPages: state.pageReducer.totalPages,
  size: state.pageReducer.size,
});
export default connect(mapStateToProps)(Pager);
