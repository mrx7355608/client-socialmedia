import { useState } from "react";
import SearchModal from "./SearchModal";
import { Link } from "react-router-dom";

// icons
import { RiHome7Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaUserFriends } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export default function Navbar() {
    const [showSearch, setshowSearch] = useState(false);

    return (
        <>
            <div className="flex items-center justify-between p-4 bg-white shadow-md gap-x-2">
                <div className="ml-1 flex items-center gap-x-2">
                    <img src="/logo.svg" alt="logo" className="w-3 h-auto" />
                    <h3 className="font-serif text-xl font-bold text-gray-800">
                        <Link to="/">Social Media</Link>
                    </h3>
                </div>
                <div>
                    <button
                        onClick={openSearchModal}
                        className="bg-gray-800 text-white rounded-md p-2.5"
                    >
                        <BsSearch
                            size="17px"
                            color="inherit"
                            style={{ margin: "auto" }}
                        />
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center gap-x-2 p-2">
                <button className="flex-1 text-center bg-white py-3 rounded-lg shadow-md">
                    <Link to="/">
                        <RiHome7Line size="18px" style={{ margin: "0 auto" }} />
                    </Link>
                </button>
                <button className="flex-1 bg-white py-3 rounded-lg shadow-md">
                    <Link to="/profile">
                        <CgProfile size="18px" style={{ margin: "0 auto" }} />
                    </Link>
                </button>
                <button className="flex-1 bg-white py-3 rounded-lg shadow-md">
                    <HiOutlineUsers size="19px" style={{ margin: "0 auto" }} />
                </button>
                <button className="flex-1 bg-white py-3 rounded-lg shadow-md">
                    <Link to="/settings">
                        <IoSettingsOutline
                            size="19px"
                            style={{ margin: "0 auto" }}
                        />
                    </Link>
                </button>
            </div>
            {showSearch ? (
                <SearchModal closeSearchModal={closeSearchModal} />
            ) : null}
        </>
    );

    function openSearchModal() {
        return setshowSearch(true);
    }
    function closeSearchModal() {
        return setshowSearch(false);
    }
}
