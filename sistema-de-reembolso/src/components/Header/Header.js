import {
  FaBars,
  FaExchangeAlt,
  FaMoneyBill,
  FaSignOutAlt,
  FaUserTie,
} from "react-icons/fa";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleLogout } from "../../store/actions/authActions";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Button } from "../Button/Button";
import { HeaderContainer } from "./Header.styled";
import LogoBranca from "../../img/logoBranca.png";
import { Dropdown, DropdownContent } from "../Dropdown/Dropdown";

const Header = ({ nome, handleLogout, dispatch }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <img src={LogoBranca} alt="Logo DBC" />

      <div>
        <Dropdown>
          <Button
            background={primaryColor}
            color={secondaryColor}
            colorHover={secondaryColor}
            borderColor={primaryColor}
            padding={"8px"}
          >
            <FaBars />
          </Button>
          <DropdownContent>
            <span>Páginas</span>
            <Link to="/principal">
              Reembolsos <FaExchangeAlt />
            </Link>
            <Link to="/gestor">
              Gestor <FaUserTie />
            </Link>
            <Link to="/financeiro">
              Financeiro <FaMoneyBill />
            </Link>
          </DropdownContent>
        </Dropdown>

        {nome}

        <img src="" alt="foto do usuário" />
        <Button
          background={secondaryColor}
          backgroundHover={primaryColor}
          color={primaryColor}
          colorHover={secondaryColor}
          borderColor={primaryColor}
          padding={"8px"}
          onClick={() => handleLogout(dispatch, navigate)}
        >
          Sair
          <FaSignOutAlt />
        </Button>
      </div>
    </HeaderContainer>
  );
};

const mapDispatchToProps = () => ({
  handleLogout: (dispatch, navigate) => handleLogout(dispatch, navigate),
});

export default connect(mapDispatchToProps)(Header);
