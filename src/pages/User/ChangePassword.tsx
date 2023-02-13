export default function ChangePassword() {
    return (
        <div className="p-3 flex flex-col justify-center">
            <h3 className="mb-5 font-serif font-bold text-3xl text-center">Change Password</h3>
            <input
                className="rounded-lg border-2 border-gray-900 bg-transparent text-gray-900 font-medium px-3 py-2"
                type="password"
                name="oldPassword"
                placeholder="Old password"
            />
            <input
                className="rounded-lg border-2 border-gray-900 bg-transparent text-gray-900 font-medium px-3 py-2"
                type="password"
                name="newPassword"
                placeholder="New password"
            />
            <button onClick={changePassword} className="rounded-lg bg-gray-900 text-white font-medium py-2">
                Change password
            </button>
        </div>
    );

    function changePassword() {}
}
