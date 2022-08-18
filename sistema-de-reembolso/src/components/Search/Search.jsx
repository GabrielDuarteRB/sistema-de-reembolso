import { primaryColor, secondaryColor } from "../../utils/colors"
import { Button } from "../Button/Button"
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div>
        <input type="text" placeholder="Filtar por nome" />
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
  )
}
export default Search