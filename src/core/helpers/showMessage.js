import { toast } from "react-toastify";

export const TOAST_OPTIONS = {
    theme: "colored",
    pauseOnFocusLoss: false,
    autoClose: 2000,
    toastId: 401,
};

export const showMessage = {
    success: (message = "successfully") =>
        toast.success(message, TOAST_OPTIONS),
    error: (message = "failed") => toast.error(message, TOAST_OPTIONS),
    info: (message) => toast.info(message, TOAST_OPTIONS),
    warning: (message) => toast.warning(message, TOAST_OPTIONS),
};
