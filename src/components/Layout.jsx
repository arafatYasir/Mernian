import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className="flex gap-8">
                {/* leftbar */}
                <div>sd</div>
                <Outlet />
                {/* rightbar */}
                <div>sd</div>
            </div>
        </>
    );
};

export default Layout;