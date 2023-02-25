import { BsSearch } from "react-icons/bs";

// TODO: Add debounce
export default function SearchModal({ closeSearchModal }: { closeSearchModal: () => void }) {
    return (
        <div className="w-full absolute top-0 p-3 flex flex-col items-center bg-opacity-50 bg-black w-screen h-screen">
            {/* search bar */}
            <div className="flex flex-col gap-x-2 bg-white w-full rounded-lg p-3">
                <input
                    className="border-2 border-gray-900 rounded-md bg-transparent px-3 py-2 w-full font-medium text-gray-700"
                    type="text"
                    name="search"
                    placeholder="Search"
                />
                <div className="w-full mt-2 flex">
                    <button className="flex-1 mr-2 bg-gray-800 text-white rounded-md p-2">
                        <BsSearch
                            style={{
                                display: "inline",
                                marginRight: "5px",
                            }}
                        />
                        Search
                    </button>
                    <button
                        onClick={closeSearchModal}
                        className="flex-1 bg-gray-200 text-gray-800 font-medium rounded-md p-2"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
