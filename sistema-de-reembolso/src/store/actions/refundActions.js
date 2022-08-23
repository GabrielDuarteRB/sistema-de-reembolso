import { apiRefund } from "../../api";
import { toast } from "../../components/Toaster/Toaster";
import { chooseGet } from "../../utils/validationGetRefund";
import { handleForm } from "./formActions";
import { getUser } from "./usersActions";

export const handleCreateRefund = async (dispatch, values, navigate) => {
  try {
    const { data } = await apiRefund.post("/reembolso/create", {
      titulo: values.titulo,
      valor: values.valor,
    });
    await handleAnexo(
      data.idReembolso,
      { file: values.file },
      data.usuario.idUsuario,
    );

    const reset = {
      type: "SET_RESET",
    };
    dispatch(reset);

    const upload = {
      type: "LOADING_TRUE",
    };
    dispatch(upload);

    navigate("/reembolsos");
    handleForm(dispatch, "enable");
    toast.fire({
      icon: "success",
      title: "Reembolso Solicitado!",
    });
  } catch (error) {
    handleForm(dispatch, "enable");
    console.log(error);
  }
};

export const handleAnexo = async (idRefund, anexo, idUser) => {
  try {
    await apiRefund.post(
      `/upload/anexo/reembolso/usuario?idReembolso=${idRefund}&idUsuario=${idUser}`,
      anexo,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export const getRefundsByUser = async (
  dispatch,
  statusRefund,
  page,
  quantityPerPage,
) => {
  try {
    const { data } = await apiRefund.get(
      `/reembolso/logged/list/status?statusReembolso=${statusRefund}&pagina=${page}&quantidadeDeRegistros=${quantityPerPage}`,
    );

    const getPages = {
      type: "GET_PAGES",
      page: data.page,
      totalPages: data.totalPages,
      itensPerPage: data.content.length,
    };
    dispatch(getPages);

    const get = {
      type: "GET_REFUNDS_BY_USER",
      refund: data.content,
    };
    dispatch(get);
  } catch (error) {
    console.log(error);
  }
};

export const getAllRefunds = async (
  dispatch,
  statusRefund,
  page,
  quantityPerPage,
) => {
  try {
    const { data } = await apiRefund.get(
      `/reembolso/list/status?statusReembolso=${statusRefund}&pagina=${page}&quantidadeDeRegistros=${quantityPerPage}`,
    );

    const getPages = {
      type: "GET_PAGES",
      page: data.page,
      totalPages: data.totalPages,
      itensPerPage: data.content.length,
    };

    dispatch(getPages);

    const get = {
      type: "GET_ALL_REFUNDS",
      refund: data.content,
    };
    dispatch(get);
  } catch (error) {
    console.log(error);
  }
};

export const getRefundById = async (dispatch, idRefund) => {
  try {
    const { data } = await apiRefund.get(`/reembolso/${idRefund}`);
    const get = {
      type: "GET_REFUND_BY_ID",
      refundById: data,
    };
    dispatch(get);
  } catch (error) {
    console.log(error);
  }
};

export const getRefundByName = async (
  dispatch,
  name,
  statusRefund,
  page,
  size,
) => {
  try {
    const { data } = await apiRefund.get(
      `/reembolso/list/nome/status?nome=${name}&statusReembolso=${statusRefund}&pagina=${page}&quantidadeDeRegistros=${size}`,
    );

    const get = {
      type: "GET_REFUNDS_BY_USER",
      refund: data.content,
    };
    dispatch(get);

    const getPages = {
      type: "GET_PAGES",
      page: data.page,
      totalPages: data.totalPages,
      itensPerPage: data.content.length,
    };
    dispatch(getPages);
  } catch (error) {
    console.log(error);
  }
};

export const handleDeleteRefund = async (
  dispatch,
  idRefund,
  page,
  size,
  idUser,
  nameSearch,
  statusRefund,
  role,
) => {
  try {
    const loading = {
      type: "LOADING_TRUE",
    };
    dispatch(loading);

    await apiRefund.delete(`/reembolso/delete/${idRefund}/usuario/${idUser}`);

    toast.fire({
      icon: "success",
      title: "Reembolso deletado",
    });

    chooseGet(dispatch, nameSearch, statusRefund, page, size, role);
    getUser(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const handleUpdateRefund = async (
  dispatch,
  values,
  idRefund,
  idUser,
  navigate,
) => {
  try {
    await apiRefund.put(
      `/reembolso/update/${idRefund}/usuario/${idUser}`,
      values,
    );

    await handleAnexo(idRefund, { file: values.file }, idUser);

    const reset = {
      type: "SET_RESET",
    };
    dispatch(reset);

    const upload = {
      type: "LOADING_TRUE",
    };
    dispatch(upload);

    handleForm(dispatch, "enable");

    toast.fire({
      icon: "success",
      title: "Reembolso atualizado com sucesso",
    });

    navigate("/reembolsos");
  } catch (error) {
    handleForm(dispatch, "enable");
    console.log(error);
    toast.fire({
      icon: "error",
      title: "Erro ao atualizar reembolso",
    });
  }
};

export const managerAprove = async (
  dispatch,
  idRefund,
  action,
  page,
  size,
  statusRefund,
  nameSearch,
) => {
  try {
    const loading = {
      type: "LOADING_TRUE",
    };
    dispatch(loading);
    await apiRefund.put(`/gestor/aprovar/${idRefund}?aprovado=${action}`);
    await chooseGet(
      dispatch,
      nameSearch,
      statusRefund,
      page,
      size,
      "ROLE_GESTOR",
    );
    toast.fire({
      icon: "success",
      title: `Reembolso ${action === "true" ? "Aprovado" : "Negado"}!`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const financierAprove = async (
  dispatch,
  idRefund,
  action,
  page,
  size,
  statusRefund,
  nameSearch,
) => {
  try {
    const loading = {
      type: "LOADING_TRUE",
    };
    dispatch(loading);
    await apiRefund.put(`/financeiro/pagar/${idRefund}?pagar=${action}`);
    await chooseGet(
      dispatch,
      nameSearch,
      statusRefund,
      page,
      size,
      "ROLE_FINANCEIRO",
    );
    toast.fire({
      icon: "success",
      title: `Reembolso ${action === "true" ? "Pago" : "Negado"}!`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const changeStatus = (value, dispatch) => {
  const resetPages = {
    type: "SET_RESET",
  };
  dispatch(resetPages);

  const loading = {
    type: "LOADING_TRUE",
  };
  dispatch(loading);

  const status = {
    type: "SET_STATUS",
    statusRefund: value,
  };
  dispatch(status);
};

export const changeNameSearch = (value, dispatch, lastValue) => {
  if (value === lastValue) {
    return;
  }

  const resetPages = {
    type: "SET_CLEAR",
  };
  dispatch(resetPages);

  const loading = {
    type: "LOADING_TRUE",
  };
  dispatch(loading);

  const name = {
    type: "SET_NAME_SEARCH",
    nameSearch: value,
  };
  dispatch(name);
};

export const readUrl = (anexo) => {
  const byteString = atob(anexo.anexoDTO.data);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([ia], { type: anexo.anexoDTO.tipo });
  const url = window.URL.createObjectURL(blob);
  window.open(url);
};

export const navigateToUpdate = (dispatch, navigate, idRefund) => {
  navigate(`/editar-reembolso/${idRefund}`);
  const loading = {
    type: "LOADING_TRUE",
  };
  dispatch(loading);
};

export const validationButtonManager = (
  dispatch,
  size,
  statusRefund,
  idRefund,
  page,
  actualStatusRefund,
  nameSearch,
  itensPerPage,
  bool,
  status,
) => {
  let actualpage = page;
  if (itensPerPage === 1 && actualpage > 0) {
    actualpage = actualpage - 1;
  }
  statusRefund === status
    ? managerAprove(
        dispatch,
        idRefund,
        bool,
        actualpage,
        size,
        actualStatusRefund,
        nameSearch,
      )
    : toast.fire({
        icon: "error",
        title: "Não é possivel mais modificar o status desse reembolso",
      });
};

export const validationButtonFinancer = (
  dispatch,
  size,
  statusRefund,
  idRefund,
  page,
  actualStatusRefund,
  nameSearch,
  itensPerPage,
  bool,
  status,
) => {
  let actualpage = page;
  if (itensPerPage === 1 && actualpage > 0) {
    actualpage = actualpage - 1;
  }
  statusRefund === status
    ? financierAprove(
        dispatch,
        idRefund,
        bool,
        actualpage,
        size,
        actualStatusRefund,
        nameSearch,
      )
    : toast.fire({
        icon: "error",
        title: "Não é possivel mais modificar o status desse reembolso",
      });
};
