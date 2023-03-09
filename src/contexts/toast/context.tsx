import ErrorToast from "@/components/Toasts/ErrorToast";
import SuccessToast from "@/components/Toasts/SuccessToast";
import { createContext, ReactNode, useContext, useState } from "react";

const ToastContext = createContext<{
    showSuccessToast: (message: string) => void;
    showErrorToast: (message: string) => void;
}>({
    showSuccessToast: () => undefined,
    showErrorToast: () => undefined,
});
export const useToast = () => useContext(ToastContext);

interface IToast {
    show: boolean;
    message: string;
}

export default function ToastProvider({ children }: { children: ReactNode }) {
    const [successToast, setSuccessToast] = useState<IToast>({
        show: false,
        message: "",
    });
    const [errorToast, setErrorToast] = useState<IToast>({
        show: false,
        message: "",
    });

    return (
        <ToastContext.Provider value={{ showErrorToast, showSuccessToast }}>
            {children}
            {successToast.show ? <SuccessToast message={successToast.message} /> : null}
            {errorToast.show ? <ErrorToast message={errorToast.message} /> : null}
        </ToastContext.Provider>
    );
    function showErrorToast(message: string) {
        setErrorToast({ show: true, message });
        return setTimeout(() => setErrorToast({ show: false, message: "" }), 5000);
    }
    function showSuccessToast(message: string) {
        setSuccessToast({ show: true, message });
        return setTimeout(() => setSuccessToast({ show: false, message: "" }), 5000);
    }
}
