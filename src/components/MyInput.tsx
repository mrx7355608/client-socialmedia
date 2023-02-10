export default function MyInput({
    name,
    type,
    placeholder,
    error,
}: {
    name: string;
    type: string;
    placeholder: string;
    error: any;
}) {
    return (
        <div className="flex flex-col items-start justify-center">
            <input
                className="w-full px-4 py-2 rounded-md bg-transparent border-2 border-gray-900"
                name={name}
                type={type}
                placeholder={placeholder}
            />
            <span className="mb-3 font-sm text-red-600 font-medium">
                {error && error.type === type ? error.message : null}
            </span>
        </div>
    );
}
