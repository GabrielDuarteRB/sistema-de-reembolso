import Swal from "sweetalert2";

export const toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});

export const confirmModal = (title, id, handleDelete, dispatch, page, size) => {
  Swal.fire({
    title: title,
    confirmButtonText: "Confirmar",
    showDenyButton: true,
    denyButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      handleDelete(dispatch, id, page, size);
    }
  });
};
