import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import FormLogin from "../../components/Form/FormLogin";
import { handleTypePassword } from "../../store/actions/formActions";

const Login = ({ dispatch, isLogged }) => {
  const navigate = useNavigate();

  useEffect(() => {
    isLogged && navigate("/principal");
  }, []);

  useEffect(() => {
    handleTypePassword(dispatch, "text");
  }, []);

  return (
    <Container>
      <FormLogin />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.authReducer.isLogged,
});
export default connect(mapStateToProps)(Login);
