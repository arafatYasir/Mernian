import { Outlet } from "react-router";
import Navbar from "./Navbar";
import LeftSideBar from "./LeftSideBar";

const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className="flex gap-8">
                {/* leftbar */}
                <LeftSideBar />
                <Outlet />
                {/* rightbar */}
                <div>sd</div>
            </div>
        </>
    );
};

export default Layout;