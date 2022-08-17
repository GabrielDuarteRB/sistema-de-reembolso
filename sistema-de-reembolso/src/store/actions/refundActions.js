import Swal from "sweetalert2";
import { apiRefund } from "../../api";
import { toast } from "../../components/Toaster/Toaster";

export const handleCreateRefund = async (dispatch, values, navigate) => {
  try {
    await apiRefund.post("/reembolso/create", values);
    const create = {
      type: "UPLOAD_TRUE",
    };
    dispatch(create);
    navigate("/principal");
    toast.fire({
      icon: "success",
      title: "Reembolso Solicitado!",
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

    const get = {
      type: "GET_REFUND",
      refund: data.content,
      page: data.page,
      totalPages: data.totalPages,
      size: data.size,
    };
    dispatch(get);
  } catch (error) {
    console.log(error);
  }
};

export const handleDeleteRefund = async (idRefund, dispatch) => {
  try {
    await apiRefund.delete(`/reembolso/logged/delete/${idRefund}`);
    toast.fire({
      icon: "success",
      title: "Reembolso deletado",
    });
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
    dispatch(upload);
    navigate("/principal");
  } catch (error) {
    console.log(error);
    toast.fire({
      icon: "error",
      title: "Erro ao atualizar Reembolso",
    });
  }
};

export const navigateToUpdate = (navigate, idRefund) => {
  navigate(`/solicitar-reembolso/${idRefund}`);
};
