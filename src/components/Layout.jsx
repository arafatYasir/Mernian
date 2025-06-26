import { Outlet, } from "react-router";
import Navbar from "./Navbar";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className="flex justify-between">
                {/* leftbar */}
                <LeftSideBar />
                <Outlet />
                {/* rightbar */}
                <RightSideBar />
            </div>
        </>
    );
};

export default Layout;