export default function RemoveAccount() {
    return (
        <div className="w-full flex flex-col">
            <h2 className="mb-3 font-bold font-serif text-3xl">Remove account</h2>
            <p>Are you sure you want to permanently delete your account?</p>
            <button className="mt-2 bg-red-600 text-white rounded-lg py-2 w-full font-medium">Delete</button>
            <button className="mt-2 bg-gray-200 text-gray-800 rounded-lg py-2 w-full font-medium">Cancel</button>
        </div>
    );
}
