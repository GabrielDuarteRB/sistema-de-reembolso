import { apiRefund } from "../../api";
import { toast } from "../../components/Toaster/Toaster";
import axios from 'axios'

export const handleLogin = async (dispatch, values, navigate) => {
  try {
    const { data } = await apiRefund.post("/usuario/login", values);
    console.log(data.token);
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    apiRefund.defaults.headers.common["Authorization"] = data.token;

    const logged = {
      type: "SET_LOGIN",
      token: data.token,
      role: data.role,
    };

    dispatch(logged);
    toast.fire({
      icon: "success",
      title: "Bem vindo!",
    });
    navigate("/principal");
  } catch (error) {
    if (error.response.status === 400) {
      toast.fire({
        icon: "error",
        title: "Email ou Senha inválidos",
      });
    }
    console.log(error);
  }
};

export const handleSignUp = async (dispatch, values, navigate) => {
  let token;
  try {
    const { data } = await apiRefund.post("/usuario/cadastro", {
      nome: values.nome,
      email: values.email,
      senha: values.senha
    });
    token = data.token
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    apiRefund.defaults.headers.common["Authorization"] = data.token;

    const signUp = {
      type: "SET_SIGNUP",
      token: data.token,
      role: data.role,
    };
    dispatch(signUp);

    // navigate("/principal");
  } catch (error) {
    if (error.response.status === 400) {
      console.log(error);
      toast.fire({
        icon: "error",
        title: "Email já cadastrado",
      });
    }
    toast.fire({
      icon: "error",
      title: "Dados incorretos",
    });
    console.log(error);
  }
  
  const data = new FormData()
  data.append('file', values.file)
  console.log(data)

  signUpImage(token, data)
};

export const signUpImage = async (token, file) => {
  try {
    await apiRefund.post('/upload/foto', {
      data: file
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": '*/*',
        "Authorization": token
      }
    })
  } catch (error) {
    console.log(error)
  }
} 

export const handleLogout = (dispatch, navigate) => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
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
