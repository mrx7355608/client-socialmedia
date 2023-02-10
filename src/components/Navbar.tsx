import { RiHome7Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="flex items-center justify-center py-4 bg-white shadow-md gap-x-2">
                <img src="/logo.svg" alt="logo" className="w-3 h-auto" />
                <h3 className="font-serif text-xl font-bold text-gray-800">
                    <Link to="/">Social Media</Link>
                </h3>
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
                    <FaUserFriends size="18px" style={{ margin: "0 auto" }} />
                </button>
                <button className="flex-1 bg-white py-3 rounded-lg shadow-md">
                    <BsSearch size="18px" style={{ margin: "0 auto" }} />
                </button>
            </div>
        </>
    );
}
