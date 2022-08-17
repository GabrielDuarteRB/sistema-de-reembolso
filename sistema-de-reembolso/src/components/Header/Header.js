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
import noUser from "../../img/noUser.jpeg";

import { Dropdown, DropdownContent } from "../Dropdown/Dropdown";
import { Image } from "../Image/Image";


const Header = ({ name, foto, role, handleLogout, dispatch }) => {

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <img width="120px" src={LogoBranca} alt="Logo DBC" />

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

          {role === "ROLE_ADMIN" ? console.log(role) : console.log(role)}
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

        <span>{name}</span>
        <Image 
          borderRadius='100%'
          height='60px'
          width='60px'
          src={foto ? `data:image/jpg;base64,` + foto : noUser} 
          alt="foto do usuário" 
        />
        
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

const mapStateToProps = (state) => ({
  name: state.usersReducer.name,
  foto: state.usersReducer.foto,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
