import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useEffect } from "react";
import { connect } from "react-redux";
import { isAuth } from "./store/actions/authActions";
import NotFound from "./pages/NotFound/NotFound";
import Loading from "./components/Loading/Loading";
import FormRefund from "./components/Form/FormRefund";
import Manager from "./pages/Manager/Manager";
import Financier from "./pages/Financier/Financier";
import Admin from "./pages/Admin/Admin";

const Routers = ({ isLogged, role, isLoading, dispatch }) => {
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
            {["ROLE_COLABORADOR", "ROLE_ADMIN"].find((r) => r === role) && (
              <>
                <Route path="/reembolsos" element={<Main />} />
                <Route path="/solicitar-reembolso" element={<FormRefund />} />
                <Route
                  path="/editar-reembolso/:idRefund"
                  element={<FormRefund />}
                />
              </>
            )}

            {["ROLE_FINANCEIRO", "ROLE_ADMIN"].find((r) => r === role) && (
              <Route path="/financeiro" element={<Financier />} />
            )}

            {["ROLE_GESTOR", "ROLE_ADMIN"].find((r) => r === role) && (
              <Route path="/gestor" element={<Manager />} />
            )}

            {role === "ROLE_ADMIN" && (
              <>
                <Route path="/usuarios" element={<Admin />} />
              </>
            )}
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
  isLogged: state.authReducer.isLogged,
  isLoading: state.authReducer.isLoading,
  role: state.authReducer.role,
});

export default connect(mapStateToProps)(Routers);
