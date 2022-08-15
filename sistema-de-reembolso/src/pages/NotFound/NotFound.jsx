import { NotFoundContainer } from "./NotFound.styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isAuth } from "../../store/actions/authActions";
import { connect } from "react-redux";

const NotFound = ({dispatch, isLogged}) => {
  const navigate = useNavigate();

  const logged = () => {
    if(isLogged) {
      navigate("/principal")
    }else{
      navigate("/")
    }
  }

  useEffect(() => {
    isAuth(dispatch);
    logged()
  }, [])

  return (
    <NotFoundContainer>
      <h1>Página não encontrada</h1>
    </NotFoundContainer>
  )
};

const mapStateToProps = (state) => ({
  isLogged: state.authReducer.isLogged,
});

export default connect(mapStateToProps)(NotFound)