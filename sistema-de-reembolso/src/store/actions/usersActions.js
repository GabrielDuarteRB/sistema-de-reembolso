import { apiRefund } from "../../api";

export const getUser = async (dispatch) => {
  try {
    const { data } = await apiRefund.get("/usuario/logged");
    console.log(data)
    const get = {
      type: "GET_USER",
      name: data.nome,
      email: data.email,
      foto: data.fotoDTO && data.fotoDTO.data,
    };
    dispatch(get);
  } catch (error) {
    console.log(error);
  }
};
