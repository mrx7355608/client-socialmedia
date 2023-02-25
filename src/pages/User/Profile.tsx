import { useAuth } from "@/contexts/auth/context";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Profile() {
    const { state } = useAuth();

    const linkStyle = "mr-9 bg-transparent font-medium text-gray-900";
    const activeLinkStyle = `${linkStyle} border-b-2 border-gray-800 pb-1`;
    return (
        <>
            {/* user image and some data */}
            <div className="p-5 bg-white rounded-lg shadow-md mb-5">
                <img
                    src={state.user?.profilePicture}
                    className="rounded-full w-28 h-28 mx-auto mb-6"
                />
                <h3 className="text-center text-xl font-medium text-gray-800">
                    {state.user?.fullname}
                </h3>
                <p className="text-center text-gray-500 font-medium">zerotwo@life.com</p>
                <hr className="my-5" />
                <div>
                    <NavLink
                        end
                        to="/profile"
                        className={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
                    >
                        Posts
                    </NavLink>
                    <NavLink
                        end
                        to="/profile/photos"
                        className={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
                    >
                        Photos
                    </NavLink>
                    <NavLink
                        end
                        to="/profile/friends"
                        className={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
                    >
                        Friends
                    </NavLink>
                </div>
            </div>

            {/* posts, friends, photos */}
            <Outlet />
        </>
    );
}
