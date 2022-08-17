import Swal from 'sweetalert2'

export const toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
})

export const modal = Swal.mixin({
    modal: true,
    position: "top",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
})