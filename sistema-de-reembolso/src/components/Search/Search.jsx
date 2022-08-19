import { primaryColor, secondaryColor } from "../../utils/colors";
import { Button } from "../Button/Button";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { changeNameSearch } from "../../store/actions/refundActions";

const Search = ({ dispatch, refund, users }) => {

  return (
    <div>
      <span>Filtrar por nome</span>
      <input
        onBlur={(e) => changeNameSearch(e.target.value, dispatch)}
        type="text"
        placeholder="Digite um nome"
      />
      <Button
        background={primaryColor}
        backgroundHover={secondaryColor}
        color={secondaryColor}
        colorHover={primaryColor}
        borderColor={primaryColor}
        padding={"4px"}
      >
        <FaSearch />
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  refund: state.refundReducer.refund,
});

export default connect(mapStateToProps)(Search);
