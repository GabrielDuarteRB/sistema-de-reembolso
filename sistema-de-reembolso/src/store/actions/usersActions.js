import { apiRefund } from "../../api";

export const getUser = async (dispatch) => {
  try {
    const { data } = await apiRefund.get("/usuario/logged");

    const user = {
      type: "GET_USER",
      name: data.nome,
      email: data.email,
      foto: data.fotoDTO && data.fotoDTO.data,
      totalValue: data.valorTotal,
    };
    dispatch(user);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (dispatch, page, size) => {
  try {
    const { data } = await apiRefund.get(
      `/usuario/listar?pagina=${page}&quantidadeDeRegistros=${size}`,
    );

    const users = {
      type: "GET_ALL_USERS",
      users: data.content,
    };

    dispatch(users);

    const getPages = {
      type: "GET_PAGES",
      page: data.page,
      totalPages: data.totalPages,
    };
    dispatch(getPages);
  } catch (error) {
    console.log(error);
  }
};

export const getUsersByName = async (dispatch, name, page, size) => {
  try {
    const { data } = await apiRefund.get(
      `/usuario/listar/nome?nome=${name}&pagina=${page}&quantidadeDeRegistros=${size}`,
    );

    const users = {
      type: "GET_ALL_USERS",
      users: data.content,
    };

    dispatch(users);

    const getPages = {
      type: "GET_PAGES",
      page: data.page,
      totalPages: data.totalPages,
    };
    dispatch(getPages);
  } catch (error) {
    console.log(error);
  }
};
