import { apiRefund } from "../../api";
import { toast } from "../../components/Toaster/Toaster";
import { handleForm } from "./formActions";

export const handleLogin = async (dispatch, values, navigate) => {
  try {
    const { data } = await apiRefund.post("/usuario/login", values);

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

    handleForm(dispatch, "enable");
    navigate("/reembolsos");
  } catch (error) {
    handleForm(dispatch, "enable");
    if (error.response.status === 400) {
      toast.fire({
        icon: "error",
        title: "Email ou Senha inválidos",
      });
    }
    console.log(error);
  }
};

export const handleSignUp = async (dispatch, values, navigate, byAdmin) => {
  try {
    const { data } = await apiRefund.post("/usuario/cadastro", {
      nome: values.nome,
      email: values.email,
      senha: values.senha,
    });
    handleForm(dispatch, "enable");

    if (byAdmin) {
      console.log(data.idUsuario, values.tipoUser);
      await handleRole(data.idUsuario, values.tipoUser);
      navigate("/usuarios");
      toast.fire({
        icon: "sucess",
        title: "Usuario cadastrado",
      });
      return;
    }
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    apiRefund.defaults.headers.common["Authorization"] = data.token;

    if (data.token && values.foto) {
      await signUpImage({ file: values.foto });
    }

    const signUp = {
      type: "SET_LOGIN",
      token: data.token,
      role: data.role,
    };
    dispatch(signUp);
    navigate("/reembolsos");
  } catch (error) {
    handleForm(dispatch, "enable");
    if (error.response.status === 400) {
      toast.fire({
        icon: "error",
        title: "Email já cadastrado",
      });
      return;
    }
    toast.fire({
      icon: "error",
      title: "Dados incorretos",
    });
    console.log(error);
  }
};

export const signUpImage = async (foto) => {
  try {
    await apiRefund.post("/upload/foto", foto, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.log(error);
  }
};

export const handleRole = async (idUser, role) => {

  console.log('oii')
  try {
    await apiRefund.post(
      `/admin/atribuir/role?idUsuario=${idUser}&role=${role}`,
      role,
    );
  } catch (error) {
    console.log(error);
  }
};

export const handleLogout = (dispatch, navigate) => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  apiRefund.defaults.headers.common["Authorization"] = "";
  const logout = {
    type: "SET_LOGOUT",
  };
  dispatch(logout);
  navigate("/");
};

export const isAuth = (dispatch) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token) {
    apiRefund.defaults.headers.common["Authorization"] = token;

    const logged = {
      type: "SET_LOGIN",
      token: token,
      role: role,
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
