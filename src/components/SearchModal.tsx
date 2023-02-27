import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function SearchModal({ closeSearchModal }: { closeSearchModal: () => void }) {
    const [error, setError] = useState<string>("");
    const navigateTo = useNavigate();
    const searchInputRef = useRef<HTMLInputElement>(null);

    function searchButtonOnClickHandler() {
        if (searchInputRef.current && searchInputRef.current.value) {
            const url = `/search?user=${searchInputRef.current.value}`;
            closeSearchModal();
            return navigateTo(url);
        }
        setError("Nothing to search");
        return setTimeout(() => setError(""), 5000);
    }

    return (
        <div className="w-full fixed left-0 top-0 p-3 flex flex-col items-center bg-opacity-50 bg-black w-screen h-full">
            {/* search bar */}
            <div className="flex flex-col gap-x-2 bg-white w-full rounded-lg p-3">
                <input
                    ref={searchInputRef}
                    className="border-2 border-gray-900 rounded-md bg-transparent px-3 py-2 w-full font-medium text-gray-700"
                    type="text"
                    name="search"
                    placeholder="Search"
                />
                <p className="font-medium text-sm text-red-600 my-1">{error}</p>
                <div className="w-full mt-2 flex">
                    <button
                        onClick={searchButtonOnClickHandler}
                        className="flex-1 mr-2 bg-gray-800 text-white rounded-md p-2"
                    >
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
