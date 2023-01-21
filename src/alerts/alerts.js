import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export const success = () => {
  Swal.fire({
    icon: 'success',
    text: 'Email enviado con éxito!',
    showConfirmButton: false,
    timer: 2000,
  });
};

export const error = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Error al enviar el email!',
    showConfirmButton: false,
    timer: 2000,
  });
};
