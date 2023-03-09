import { BsFillCheckCircleFill } from "react-icons/bs";

export default function SuccessToast({ message }: { message: string }) {
    return (
        <div className="transition-all delay-300 left-4 ease-in-out flex justify-between items-center w-max p-3 px-4 rounded-lg bg-green-200 text-green-800 font-medium shadow-lg fixed bottom-4 text-sm">
            <div className="flex gap-x-2 items-center">
                <BsFillCheckCircleFill />
                <p className="pb-0.5">{message}</p>
            </div>
            <p className="pb-0.5 ml-9">x</p>
        </div>
    );
}
