import Swal from "sweetalert2";

export const toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});

export const confirmDeleteModal = (
  title,
  id,
  handleDelete,
  dispatch,
  page,
  size,
) => {
  Swal.fire({
    title: title,
    confirmButtonText: "Confirmar",
    confirmButtonColor: "#0097e6",
    showDenyButton: true,
    denyButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      handleDelete(dispatch, id, page, size);
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
