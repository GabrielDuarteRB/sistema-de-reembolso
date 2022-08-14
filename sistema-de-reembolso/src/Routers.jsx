import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useEffect } from "react";
import { connect } from "react-redux";
import { isAuth } from "./store/actions/AuthActions";
import { NotFound } from "./pages/NotFound/NotFound";
import Loading from "./components/Loading/Loading";

const Routers = ({ auth, dispatch }) => {
  useEffect(() => {
    isAuth(dispatch);
  }, []);

  if (auth.isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {auth.isLogged ? (
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
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(Routers);
