import { PaginationContainer } from "./Pager.styled";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pager = () => {
  return (
    <PaginationContainer>
      <div>
        <span>Itens por página</span>
        <select name="itens" id="">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <div>
        <span>1-5 de 10</span>
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
export default Pager;
