import { BiLogOut } from "react-icons/bi";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../store/actions/authActions";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Button } from "../Button/Button";
import { HeaderContainer } from "./Header.styled";
import {Image} from '../Image/Image'
import LogoBranca from '../../img/logoBranca.png'
import noUser from '../../img/noUser.jpeg'

const Header = ({ nome, foto, handleLogout, dispatch }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Image 
        width='140px'
        src={LogoBranca}
        alt="Logo DBC"
      />
      <div>
        <span>{nome}</span>
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
          <BiLogOut fontSize={"20px"} />
        </Button>
      </div>
    </HeaderContainer>
  );
};

const mapDispatchToProps = (state) => ({
  handleLogout: (dispatch, navigate) => handleLogout(dispatch, navigate),
  foto: state.collaboratorReducer.foto,
});

export default connect(mapDispatchToProps)(Header);
