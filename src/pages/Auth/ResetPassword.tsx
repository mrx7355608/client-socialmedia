export default function ResetPassword() {
    return (
        <div className="p-3 flex flex-col justify-center">
            <input
                className="rounded-lg border-2 border-gray-900 bg-transparent text-gray-900 font-medium px-3 py-2"
                type="password"
                name="password"
                placeholder="New password"
            />
            <input
                className="rounded-lg border-2 border-gray-900 bg-transparent text-gray-900 font-medium px-3 py-2"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
            />
            <button onClick={reset} className="rounded-lg bg-gray-900 text-white font-medium py-2">
                Reset password
            </button>
        </div>
    );

    function reset() {}
}
