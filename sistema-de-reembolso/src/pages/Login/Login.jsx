import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import FormLogin from "../../components/Form/FormLogin";

const Login = ({ auth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    auth.isLogged && navigate("/principal");
  }, []);

  return (
    <Container>
      <FormLogin />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});
export default connect(mapStateToProps)(Login);
