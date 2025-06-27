import { useState, useRef, useEffect } from "react";
import ThreeDotsIcon from "../icons/ThreeDotsIcon";

const Comment = ({ user, comment, posted }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const dropdownItems = [
        { label: "Copy Link" },
        { label: "Report Comment" },
        { label: "Hide Comment" },
    ];

    return (
        <div className="bg-white w-full pt-[11px] pb-4 pl-[26px] pr-4 relative">
            <div className="flex gap-3">
                <div>
                    <img className="w-[38px] h-[38px]" src="/friend.png" alt="User Photo" />
                </div>
                <div className="flex-1">
                    <p className="max-w-[476px] text-[#3E3F5E] text-[12px] font-['Poppins'] mb-[15px]">
                        <span className="font-semibold">{user}</span>
                        <span className="ml-[6px]">{comment}</span>
                    </p>

                    <div className="text-[12px] text-[#AFB0C0] font-['Poppins'] font-medium flex items-center gap-[25px]">
                        <span>React!</span>
                        <span>Reply</span>
                        <span>{posted}</span>

                        {/* Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <span
                                className="cursor-pointer p-1"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <ThreeDotsIcon />
                            </span>

                            {dropdownOpen && (
                                <div className="absolute top-6 right-0 bg-[#F7F7FB] rounded-md shadow-md p-2 z-50 w-[140px] space-y-1 text-[11px]">
                                    {dropdownItems.map((item, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setDropdownOpen(false)}
                                            className="hover:bg-white px-3 py-1 rounded cursor-pointer transition text-[#3E3F5E] font-medium"
                                        >
                                            {item.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
