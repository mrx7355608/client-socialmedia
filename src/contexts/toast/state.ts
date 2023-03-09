export interface IToast {
    show: boolean;
    message: string;
}
export interface IToastState {
    showSuccessToast: (message: string) => void;
    showWarningToast: (message: string) => void;
    showErrorToast: (message: string) => void;
}

export const initialToastState: IToastState = {
    showSuccessToast: () => undefined,
    showWarningToast: () => undefined,
    showErrorToast: () => undefined,
};
