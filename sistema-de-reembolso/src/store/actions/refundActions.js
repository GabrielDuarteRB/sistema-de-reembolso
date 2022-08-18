import { apiRefund } from "../../api";
import { toast } from "../../components/Toaster/Toaster";
import { handleForm } from "./formActions";

export const handleCreateRefund = async (dispatch, values, navigate) => {
  try {
    const { data } = await apiRefund.post("/reembolso/create", {
      titulo: values.titulo,
      valor: values.valor,
    });
    const create = {
      type: "LOADING_TRUE",
    };

    dispatch(create);

    handleAnexo(data.idReembolso, { file: values.file });

    handleForm(dispatch, "enable");
    navigate("/reembolsos");
    toast.fire({
      icon: "success",
      title: "Reembolso Solicitado!",
    });
  } catch (error) {
    handleForm(dispatch, "enable");
    console.log(error);
  }
};

export const handleAnexo = async (idReembolso, anexo) => {
  try {
    await apiRefund.post(`/upload/anexo?idReembolso=${idReembolso}`, anexo, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getRefund = async (
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
    };
    dispatch(getPages);

    const get = {
      type: "GET_REFUND",
      refund: data.content,
    };
    dispatch(get);
  } catch (error) {
    console.log(error);
  }
};

export const getAllRefund = async (
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
      };
      dispatch(getPages);

    const get = {
      type: "GET_REFUND",
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

export const getRefundByName = async (dispatch, name, statusRefund, page, size) => {
  try {
    const {data} = await apiRefund.get(`/usuario/listar/nome?nome=${name}&pagina=${page}&quantidadeDeRegistros=${size}`)
    
    const getPages = {
      type: "GET_PAGES",
      page: data.page,
      totalPages: data.totalPages,
    };
    dispatch(getPages);

    const get = {
      type: "GET_REFUND",
      refund: data.content,
    };
    dispatch(get);
  } catch (error) {
    console.log(error)
  }
}

export const handleDeleteRefund = async (dispatch, idRefund, page, size) => {
  try {
    const loading = {
      type: "LOADING_TRUE",
    };
    dispatch(loading);

    const { data } = await apiRefund.delete(
      `/reembolso/logged/delete/${idRefund}?pagina=${page}&quantidadeDeRegistros=${size}`,
    );

    toast.fire({
      icon: "success",
      title: "Reembolso deletado",
    });

    const getPages = {
      type: "GET_PAGES",
      totalPages: data.totalPages,
      page:
        Math.ceil(data.totalElements / data.size) >= data.page + 1
          ? data.page
          : data.page - 1,
    };
    dispatch(getPages);

    const get = {
      type: "GET_REFUND",
      refund: data.content,
    };
    dispatch(get);
  } catch (error) {
    console.log(error);
  }
};

export const handleUpdateRefund = async (
  dispatch,
  values,
  idRefund,
  navigate,
) => {
  try {
    await apiRefund.put(`/reembolso/logged/update/${idRefund}`, values);
    const upload = {
      type: "LOADING_TRUE",
    };

    handleAnexo(idRefund, { file: values.file });

    dispatch(upload);
    handleForm(dispatch, "enable");
    navigate("/reembolsos");
  } catch (error) {
    handleForm(dispatch, "enable");
    console.log(error);
    toast.fire({
      icon: "error",
      title: "Erro ao atualizar Reembolso",
    });
  }
};

export const managerAprove = async (dispatch, idRefund, action, page, size) => {
  try {
    await apiRefund.put(`/gestor/aprovar/${idRefund}?aprovado=${action}`);
    getAllRefund(dispatch, "ABERTO", page, size);
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
) => {
  try {
    await apiRefund.put(`/financeiro/pagar/${idRefund}?pagar=${action}`);
    getAllRefund(dispatch, "APROVADO_GESTOR", page, size);
    toast.fire({
      icon: "success",
      title: `Reembolso ${action === "true" ? "Pago" : "Negado"}!`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const readUrl = (anexo) => {
  console.log(anexo);
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

export const navigateToPages = (dispatch, navigate, page) => {
  navigate(page)
  const clear = {
    type: 'SET_CLEAR'
  }
  dispatch(clear)
}

