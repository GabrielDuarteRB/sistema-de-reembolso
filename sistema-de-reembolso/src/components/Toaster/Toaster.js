import Swal from "sweetalert2";
import { handleRole } from "../../store/actions/authActions";
import { handleDeleteRefund } from "../../store/actions/refundActions";
import { chooseGetUsers } from "../../utils/validationGetRefund";

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

export const confirmUpdateModal = async (id, dispatch, nameSearch, page, size ) => {
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

    inputValidator:  (value) => {
      return new Promise( async (resolve) => {
        if (value) {
          await handleRole(id, value);
          Swal.close()
          chooseGetUsers(dispatch, nameSearch, page, size)
        } else {
          resolve("Selecione um tipo");
        }
      });
    },
  });
};
