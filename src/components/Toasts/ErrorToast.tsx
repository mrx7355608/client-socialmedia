import { VscError } from "react-icons/vsc";

export default function ErrorToast({ message }: { message: string }) {
    return (
        <div className="transition delay-100 bottom-4 left-4 flex justify-between items-center w-max p-3 px-4 rounded-lg bg-red-200 text-red-800 font-medium shadow-lg fixed text-sm">
            <div className="flex gap-x-2 items-center">
                <VscError />
                <p className="pb-0.5">{message}</p>
            </div>
            <p className="pb-0.5 ml-9"></p>
        </div>
    );
}
