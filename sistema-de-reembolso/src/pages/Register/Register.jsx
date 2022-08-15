import { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "../../components/Container/Container";
import FormRegister from "../../components/Form/FormRegister";
import { handleTypePassword } from "../../store/actions/authActions";

const Register = ({ dispatch }) => {
  useEffect(() => {
    handleTypePassword(dispatch, "text");
  }, []);

  return (
    <Container>
      <FormRegister />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.authReducer.isLogged,
});
export default connect(mapStateToProps)(Register);
