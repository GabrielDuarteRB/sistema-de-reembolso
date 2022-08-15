import { BiLogOut } from "react-icons/bi";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../store/actions/authActions";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Button } from "../Button/Button";
import { HeaderContainer } from "./Header.styled";
import  LogoBranca from '../../img/logoBranca.png'

const Header = ({ nome, handleLogout, dispatch }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <img src={LogoBranca} alt="Logo DBC" />
      <div>
        <span>{nome}</span>
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
          <BiLogOut fontSize={"20px"} />
        </Button>
      </div>
    </HeaderContainer>
  );
};

const mapDispatchToProps = () => ({
  handleLogout: (dispatch, navigate) => handleLogout(dispatch, navigate),
});

export default connect(mapDispatchToProps)(Header);
