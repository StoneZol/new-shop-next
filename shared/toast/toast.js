import Swal from "sweetalert2";

const prototypeToasts = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer:1500,
    timerProgressBar: true,
    didOpen:(toast)=>{
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
})

/**
 * @param {string} icon one of "success", "error", "info", "warning", "question"
 * @param {string} title The message to display
 * @param {boolean} load Whether to show a loading spinner
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