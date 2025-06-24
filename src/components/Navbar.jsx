import { Link } from "react-router";
import MenuIcon from "../icons/MenuIcon";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import MessageIcon from "../icons/MessageIcon";
import NotificationIcon from "../icons/NotificationIcon"
import ToolsIcon from "../icons/ToolsIcon";

const Navbar = () => {
    return (
        <nav className="bg-[#615DFA] py-4 px-6 flex items-center justify-between">
            <div>
                <Link to="/">
                    <img src="/logo.png" alt="" />
                </Link>
            </div>
            <ul className="flex items-center gap-12">
                <li className="cursor-pointer">
                    <MenuIcon />
                </li>
                <li className="text-white text-sm font-bold font-['Poppins']">
                    <Link>Careers</Link>
                </li>
                <li className="text-white text-sm font-bold font-['Poppins']">
                    <Link>Store</Link>
                </li>
                <li className="text-white text-sm font-bold font-['Poppins']">
                    <Link>FAQ</Link>
                </li>
                <li className="text-white text-sm font-bold font-['Poppins'] cursor-pointer">
                    ...
                </li>
            </ul>
            <div className=" relative">
                <input className="text-[#6965E0] text-sm font-['Poppins'] w-[415px] py-[15px] pl-4 rounded-[11px] bg-[#4E4AC8] focus:bg-white outline-none transition" type="text" placeholder="Search here ..." />

                <div className="absolute top-1/2 -translate-y-1/2 right-4">
                    <SearchIcon />
                </div>
            </div>
            <div className=" flex items-center">
                <div className="w-[111px] relative after:content-[''] after:absolute after:w-[1.5px] after:h-8 after:bg-[#7A77FD] after:top-1/2 after:right-[-40px] after:-translate-y-1/2">
                    <div className="flex justify-between mb-[4px]">
                        <span className="text-white font-['Poppins'] text-[12px]">Next</span>
                        <span className="text-white font-['Poppins'] text-[12px]">35 EXP</span>
                    </div>
                    <div className="h-[3px] rounded-[7px] bg-[#4E4AC8]">
                        <div className="h-full w-[70%] bg-[#41EFFF]"></div>
                    </div>
                </div>

                <div className="flex items-center gap-[33px] ml-[72px] relative after:content-[''] after:absolute after:w-[1.5px] after:h-8 after:bg-[#7A77FD] after:top-1/2 after:right-[-33px] after:-translate-y-1/2">
                    <div>
                        <CartIcon />
                    </div>
                    <div>
                        <MessageIcon />
                    </div>
                    <div>
                        <NotificationIcon />
                    </div>
                </div>

                <div className="ml-[66px]">
                    <ToolsIcon />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;