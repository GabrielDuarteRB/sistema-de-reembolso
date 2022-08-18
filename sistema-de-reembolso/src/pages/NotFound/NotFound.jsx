import { NotFoundContainer } from "./NotFound.styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isAuth } from "../../store/actions/authActions";
import { connect } from "react-redux";

const NotFound = ({dispatch, role}) => {
  const navigate = useNavigate();

  const logged = () => {
    switch(role){
      case 'ROLE_COLABORADOR':
        return navigate('/principal')
      case 'ROLE_GESTOR':
        return navigate('/gestor')
      case 'ROLE_FINANCEIRO':
        return navigate('/financeiro')
      default:
        navigate('/')
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
  role: state.authReducer.role,
});

export default connect(mapStateToProps)(NotFound)