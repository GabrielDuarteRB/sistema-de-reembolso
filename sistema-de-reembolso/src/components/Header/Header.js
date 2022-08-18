import {
  FaBars,
  FaExchangeAlt,
  FaMoneyBill,
  FaSignOutAlt,
  FaUsers,
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
import { Img } from "../Image/Img";
import { LoadingElement } from "../Loading/Loading.styled";

const Header = ({ name, foto, dispatch }) => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  return (
    <HeaderContainer>
      <img width="120px" src={LogoBranca} alt="Logo DBC" />

      <div>
        {role === "ROLE_ADMIN" ? (
          <>
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
                <Link to="/usuarios">
                  Usuários <FaUsers />
                </Link>
                <Link to="/reembolsos">
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
          </>
        ) : (
          <></>
        )}

        <span>
          {name ? name : <LoadingElement width={"120px"} height={"24px"} />}
        </span>

        <Img
          src={foto ? `data:image/jpg;base64,` + foto : noUser}
          alt="Foto do usuário"
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

const mapStateToProps = (state) => ({
  foto: state.usersReducer.foto,
  name: state.usersReducer.name,
});

export default connect(mapStateToProps)(Header);
