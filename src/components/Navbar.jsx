import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
    HiOutlineUserGroup,
    HiOutlineCalendar,
    HiOutlinePhotograph,
    HiOutlineVideoCamera,
    HiOutlineViewGrid,
    HiOutlineStar,
} from "react-icons/hi";

import MenuIcon from "../icons/MenuIcon";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import MessageIcon from "../icons/MessageIcon";
import NotificationIcon from "../icons/NotificationIcon";
import ToolsIcon from "../icons/ToolsIcon";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dotsOpen, setDotsOpen] = useState(false);
    const dropdownRef = useRef(null)
    const dotsRef = useRef(null);

    const dropdownItems = [
        {
            label: "Pages",
            description: "Connect with fans and grow your business or community.",
            icon: <HiOutlineViewGrid />,
        },
        {
            label: "Events",
            description: "See what’s happening and never miss out again.",
            icon: <HiOutlineCalendar />,
        },
        {
            label: "Photos",
            description: "Browse and share memories with your friends.",
            icon: <HiOutlinePhotograph />,
        },
        {
            label: "Watch",
            description: "Discover videos you'll love, trending now.",
            icon: <HiOutlineVideoCamera />,
        },
        {
            label: "Groups",
            description: "Find communities based on your interests.",
            icon: <HiOutlineUserGroup />,
        },
        {
            label: "Saved",
            description: "Keep things you want to revisit later.",
            icon: <HiOutlineStar />,
        },
    ];

    useEffect(() => {
        const handleCloseDropdown = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        }

        const handleCloseDots = (e) => {
            if(dotsRef.current && !dotsRef.current.contains(e.target)) {
                setDotsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleCloseDropdown);
        document.addEventListener("mousedown", handleCloseDots);

        return () => {
            document.removeEventListener("mousedown", handleCloseDropdown);
            document.removeEventListener("mousedown", handleCloseDots);
        }
    }, [])

    return (
        <nav className="bg-[#615DFA] py-4 px-6 flex items-center justify-between relative">
            <div>
                <Link to="/">
                    <img src="/logo.png" alt="" />
                </Link>
            </div>

            <ul className="flex items-center gap-12 relative">
                {/* Menu dropdown trigger */}
                <li
                    className="cursor-pointer relative"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    ref={dropdownRef}
                >
                    <MenuIcon />
                    {dropdownOpen && (
                        <div className="absolute top-10 left-0 w-[350px] bg-[#F7F7FB] rounded-xl shadow-lg z-50 p-4 space-y-2">
                            {dropdownItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition cursor-pointer"
                                >
                                    <div className="text-xl text-[#615DFA]">{item.icon}</div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900 font-['Poppins']">
                                            {item.label}
                                        </div>
                                        <div className="text-xs text-gray-600 font-['Poppins'] leading-snug">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
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
                <li ref={dotsRef} onClick={() => setDotsOpen(!dotsOpen)} className="text-white text-sm font-bold font-['Poppins'] cursor-pointer relative">
                    <div>...</div>

                    {dotsOpen && (
                        <div className="absolute top-8 right-0 w-[230px] bg-[#F7F7FB] rounded-xl shadow-xl p-4 z-50 space-y-3">
                            <div className="text-sm font-semibold text-gray-800 font-['Poppins'] hover:bg-white p-2 rounded-md cursor-pointer transition">
                                Settings
                                <div className="text-xs text-gray-500 font-normal">Customize your preferences</div>
                            </div>
                            <div className="text-sm font-semibold text-gray-800 font-['Poppins'] hover:bg-white p-2 rounded-md cursor-pointer transition">
                                Help Center
                                <div className="text-xs text-gray-500 font-normal">Get help & find answers</div>
                            </div>
                            <div className="text-sm font-semibold text-gray-800 font-['Poppins'] hover:bg-white p-2 rounded-md cursor-pointer transition">
                                Keyboard Shortcuts
                                <div className="text-xs text-gray-500 font-normal">View all shortcuts</div>
                            </div>
                            <div className="text-sm font-semibold text-gray-800 font-['Poppins'] hover:bg-white p-2 rounded-md cursor-pointer transition">
                                Send Feedback
                                <div className="text-xs text-gray-500 font-normal">Tell us what you think</div>
                            </div>
                        </div>
                    )}
                </li>
            </ul>

            <div className="relative">
                <input
                    className="text-[#6965E0] text-sm font-['Poppins'] w-[415px] py-[15px] pl-4 rounded-[11px] bg-[#4E4AC8] focus:bg-white outline-none transition"
                    type="text"
                    placeholder="Search here ..."
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-4">
                    <SearchIcon />
                </div>
            </div>

            <div className="flex items-center">
                <div className="w-[111px] relative after:content-[''] after:absolute after:w-[1.5px] after:h-8 after:bg-[#7A77FD] after:top-1/2 after:right-[-40px] after:-translate-y-1/2">
                    <div className="flex justify-between mb-[4px]">
                        <span className="text-white font-['Poppins'] text-[12px]">Next</span>
                        <span className="text-white font-['Poppins'] text-[12px]">35 EXP</span>
                    </div>
                    <div className="h-[3px] rounded-[7px] bg-[#4E4AC8]">
                        <div
                            className="h-full w-[70%] bg-[#41EFFF] bg-gradient-to-r rounded-[7px]"
                            style={{ background: "linear-gradient(90deg,rgba(35, 210, 210, 1) 0%, rgba(35, 226, 226, 1) 81%)" }}
                        ></div>
                    </div>
                </div>

                <div className="flex items-center gap-[33px] ml-[72px] relative after:content-[''] after:absolute after:w-[1.5px] after:h-8 after:bg-[#7A77FD] after:top-1/2 after:right-[-33px] after:-translate-y-1/2">
                    <CartIcon />
                    <MessageIcon />
                    <NotificationIcon />
                </div>

                <div className="ml-[66px]">
                    <ToolsIcon />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
