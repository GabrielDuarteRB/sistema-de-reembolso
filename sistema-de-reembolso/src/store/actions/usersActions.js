import { apiRefund } from "../../api";

export const getUser = async (dispatch) => {
  try {
    const { data } = await apiRefund.get("/usuario/logged");
    const user = {
      type: "GET_USER",
      name: data.nome,
      email: data.email,
      foto: data.fotoDTO && data.fotoDTO.data,
    };
    dispatch(user);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (dispatch) => {
  try {
    const data = await apiRefund.get("/usuario/listar");

    const users = {
      type: "GET_ALL_USERS",
      users: data.data,
    };

    dispatch(users);
  } catch (error) {
    console.log(error);
  }
};
