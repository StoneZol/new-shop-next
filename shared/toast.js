import Swal from "sweetalert2";

const prototypeToast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer:3000,
    timerProgressBar: true,
    didOpen:(toast)=>{
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
})

/**
 * @param {any} icon if 0 = "info"
 */
const Toast = (icon, title, load) => {
    if (load) {
        prototypeToasts.fire({
            icon: 'info',
            title: title,
            timer: undefined,
            didOpen: (toast) => {
                Swal.showLoading();
            }
        });
    } else {
        prototypeToasts.fire({icon: icon, title: title})
    }
}

export default Toast