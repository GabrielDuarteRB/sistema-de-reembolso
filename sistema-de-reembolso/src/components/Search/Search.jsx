import { primaryColor, secondaryColor } from "../../utils/colors"
import { Button } from "../Button/Button"
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { changeNameSearch } from "../../store/actions/refundActions";

const Search = ({dispatch}) => {
  return (
    <section>
        <input onBlur={e => changeNameSearch(e.target.value, dispatch)} type="text" placeholder="Filtar por nome" />
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
    </section>
  )
}

const mapStateToProps = (state) => ({
  statusRefund: state.refundReducer.statusRefund,
});
export default connect(mapStateToProps)(Search);