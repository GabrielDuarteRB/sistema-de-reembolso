import { primaryColor, secondaryColor } from "../../utils/colors";
import { Button } from "../Button/Button";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { changeNameSearch } from "../../store/actions/refundActions";

const Search = ({ dispatch, isLoadingRefund, isLoadingUsers, nameSearch }) => {

  return (
    <div>
      <span>Filtrar por nome</span>
      <input
        disabled={isLoadingRefund && isLoadingUsers}
        onBlur={(e) => changeNameSearch(e.target.value, dispatch, nameSearch)}
        placeholder="Digite um nome"
        type="text"
      />
      <Button
        background={primaryColor}
        backgroundHover={secondaryColor}
        borderColor={primaryColor}
        color={secondaryColor}
        colorHover={primaryColor}
        disabled={isLoadingRefund && isLoadingUsers}
        padding={"4px"}
      >
        <FaSearch />
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoadingRefund: state.refundReducer.isLoading,
  isLoadingUsers: state.usersReducer.isLoading,
  nameSearch: state.refundReducer.nameSearch,
});

export default connect(mapStateToProps)(Search);
