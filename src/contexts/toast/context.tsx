import ErrorToast from "@/components/Toasts/ErrorToast";
import SuccessToast from "@/components/Toasts/SuccessToast";
import WarningToast from "@/components/Toasts/WarningToast";
import { createContext, ReactNode, useContext, useState } from "react";
import { initialToastState, IToast, IToastState } from "./state";

const ToastContext = createContext<IToastState>(initialToastState);
export const useToast = () => useContext(ToastContext);

export default function ToastProvider({ children }: { children: ReactNode }) {
    const [successToast, setSuccessToast] = useState<IToast>({
        show: false,
        message: "",
    });
    const [errorToast, setErrorToast] = useState<IToast>({
        show: false,
        message: "",
    });
    const [warningToast, setWarningToast] = useState<IToast>({
        show: false,
        message: "",
    });

    return (
        <ToastContext.Provider value={{ showSuccessToast, showWarningToast, showErrorToast }}>
            {children}
            {successToast.show ? <SuccessToast message={successToast.message} /> : null}
            {errorToast.show ? <ErrorToast message={errorToast.message} /> : null}
            {warningToast.show ? <WarningToast message={warningToast.message} /> : null}
        </ToastContext.Provider>
    );

    function showErrorToast(message: string) {
        setErrorToast({ show: true, message });
        return setTimeout(() => setErrorToast({ show: false, message: "" }), 5000);
    }

    function showWarningToast(message: string) {
        setWarningToast({ show: true, message });
        return setTimeout(() => setWarningToast({ show: false, message: "" }), 5000);
    }

    function showSuccessToast(message: string) {
        setSuccessToast({ show: true, message });
        return setTimeout(() => setSuccessToast({ show: false, message: "" }), 5000);
    }
}
