import { BsSearch } from "react-icons/bs";

// TODO: Add debounce
export default function SearchModal({
    closeSearchModal,
}: {
    closeSearchModal: () => void;
}) {
    return (
        <div className="w-full absolute top-0 p-3 flex flex-col items-center bg-opacity-50 bg-black w-screen h-screen">
            <div
                onClick={closeSearchModal}
                className="rounded-full bg-white p-1 pb-2 px-3.5 mb-3 mt-12"
            >
                x
            </div>
            {/* search bar */}
            <div className="flex gap-x-2 bg-white w-full rounded-lg p-3">
                <input
                    className="border-2 border-gray-900 rounded-md bg-transparent px-3 py-2 w-11/12 font-medium text-gray-700"
                    type="text"
                    name="search"
                    placeholder="Search"
                />
                <button className="bg-gray-900 text-white rounded-md p-3">
                    <BsSearch />
                </button>
            </div>
            <div className="h-1/2 w-full rounded-lg bg-white mt-3 px-4 py-3">
                {/* Search results */}
                {/* TODO: add logic of search results count */}
                <h2 className="font-medium text-xl mb-2">Search Results - 0</h2>
                <hr />
                <div></div>
            </div>
        </div>
    );
}
