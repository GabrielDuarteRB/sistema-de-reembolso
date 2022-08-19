import Swal from "sweetalert2";
import { handleDeleteRefund } from "../../store/actions/refundActions";

export const toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});

export const confirmDeleteModal = (
  title,
  idRefund,
  dispatch,
  page,
  size,
  idUser, 
  nameSearch, 
  statusRefund,
  role
) => {
  Swal.fire({
    title: title,
    confirmButtonText: "Confirmar",
    confirmButtonColor: "#0097e6",
    showDenyButton: true,
    denyButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      handleDeleteRefund(dispatch, idRefund, page, size, idUser, nameSearch, statusRefund, role);
    }
  });
};

export const confirmUpdateModal = async (id, handleUpdate, navigate) => {
  Swal.fire({
    showConfirmButton: true,
    confirmButtonText: "Confirmar",
    confirmButtonColor: "#0097e6",

    showDenyButton: true,
    denyButtonText: "Cancelar",

    inputOptions: {
      COLABORADOR: "Colaborador",
      GESTOR: "Gestor",
      FINANCEIRO: "Financeiro",
      ADMINISTRADOR: "Administrador",
    },

    title: "Alterar tipo do usuário",
    input: "select",
    inputPlaceholder: "Selecione",

    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value) {
          resolve();
          handleUpdate(id, value);
          navigate(0);
        } else {
          resolve("Selecione um tipo");
        }
      });
    },
  });
};
