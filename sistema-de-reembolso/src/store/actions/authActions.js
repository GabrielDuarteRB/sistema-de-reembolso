import { apiRefund } from "../../api";
import { toast } from "../../components/Toaster/Toaster";

export const handleLogin = async (dispatch, values, navigate) => {
  try {
    const { data } = await apiRefund.post("/usuario/login", values);

    localStorage.setItem("token", data);
    apiRefund.defaults.headers.common["Authorization"] = data;

    const logged = {
      type: "SET_LOGIN",
      token: data,
    };

    dispatch(logged);
    toast.fire({
      icon: "success",
      title: "Bem vindo!",
    });
    navigate("/principal");
  } catch (error) {
    toast.fire({
      icon: "error",
      title: "Login ou Senha Inválidos",
    });
    console.log(error);
  }
};

export const handleSignUp = async (dispatch, values, navigate) => {
  try {
    const { data } = await apiRefund.post("/usuario/cadastro", values);
    console.log(data);
    const signUp = {
      type: "SET_SIGNUP",
      token: data,
    };
    localStorage.setItem("token", data);
    apiRefund.defaults.headers.common["Authorization"] = data;

    dispatch(signUp);
    navigate("/principal");
  } catch (error) {
    console.log(error);
  }
};

export const handleLogout = (dispatch, navigate) => {
  localStorage.removeItem("token");
  apiRefund.defaults.headers.common["Authorization"] = "";

  navigate("/");

  const logout = {
    type: "SET_LOGOUT",
  };
  dispatch(logout);
};

export const isAuth = (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    apiRefund.defaults.headers.common["Authorization"] = token;

    const logged = {
      type: "SET_LOGIN",
      token: token,
    };

    dispatch(logged);
  } else {
    const logged = {
      type: "SET_LOADING",
      isLoading: false,
    };
    dispatch(logged);
  }
};

export const handleTypePassword = (dispatch, type) => {
  if (type === "password") {
    const password = {
      type: "SET_TYPE_PASSWORD",
      typePassword: "text",
    };
    dispatch(password);
    return;
  }

  const password = {
    type: "SET_TYPE_PASSWORD",
    typePassword: "password",
  };
  dispatch(password);
};
