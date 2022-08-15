import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useEffect } from "react";
import { connect } from "react-redux";
import { isAuth } from "./store/actions/authActions";
import { NotFound } from "./pages/NotFound/NotFound";
import Loading from "./components/Loading/Loading";
import FormRefund from "./components/Form/FormRefund";

const Routers = ({ isLogged, isLoading, dispatch }) => {
  useEffect(() => {
    isAuth(dispatch);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {isLogged ? (
          <>
            <Route path="/principal" element={<Main />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
        <Route path="/criar-reembolso" element={<FormRefund />} />
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.authReducer.isLogged,
  isLoading: state.authReducer.isLoading,
});

export default connect(mapStateToProps)(Routers);
