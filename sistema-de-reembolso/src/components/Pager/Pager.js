import { PaginationContainer } from "./Pager.styled";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { connect } from "react-redux";

const Pager = ({dispatch, size, page, totalPages}) => {

  return (
    <PaginationContainer>
      <div>
        <span>Itens por página</span>
        <select name="itens" id="">
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <div>
        <span>Página: {page+1} de {totalPages}</span>
        <button>
          <FaArrowLeft />
        </button>
        <button>
          <FaArrowRight />
        </button>
      </div>
    </PaginationContainer>
  );
};

const mapStateToProps = (state) => ({
  page: state.refundReducer.page,
  totalPages: state.refundReducer.totalPages,
  size: state.refundReducer.size,
});
export default connect(mapStateToProps)(Pager);

