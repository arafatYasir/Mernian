import { useRef, useState, useEffect } from "react";
import { HiOutlinePencilAlt, HiOutlineEye, HiOutlineLockClosed } from "react-icons/hi";
import { Link } from "react-router";

const AboutMe = () => {
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
        {
            label: "Edit Info",
            icon: <HiOutlinePencilAlt />,
            description: "Update your name, city, or other details.",
        },
        {
            label: "View as Public",
            icon: <HiOutlineEye />,
            description: "Preview your profile as others see it.",
        },
        {
            label: "Change Privacy",
            icon: <HiOutlineLockClosed />,
            description: "Manage who can view your personal info.",
        },
        {
            label: "Go to About Page",
            icon: <span className="text-sm font-bold text-[#615DFA]">→</span>,
            description: "View full about info",
            to: "/about",
        }
    ];

    return (
        <div className="w-[283px] h-[306px] bg-white rounded-[15px] px-[27px] py-[29px] relative">
            <h4 className="text-sm text-[#3E3F5E] font-['Poppins'] font-bold flex justify-between items-center">
                <span>About Me</span>

                <div className="relative" ref={dropdownRef}>
                    <span
                        className="cursor-pointer text-xl flex justify-center items-center w-[20px] h-[20px]"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        ...
                    </span>

                    {dropdownOpen && (
                        <div className="absolute top-[60px] right-0 w-[250px] bg-[#F7F7FB] rounded-xl shadow-xl p-4 z-50 space-y-3">
                            {dropdownItems.map((item, idx) =>
                                item.to ? (
                                    <Link
                                        key={idx}
                                        to={item.to}
                                        className="flex items-start gap-3 p-2 rounded-md hover:bg-white cursor-pointer transition"
                                    >
                                        <div className="text-[#615DFA] text-lg">{item.icon}</div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 font-['Poppins']">{item.label}</p>
                                            <p className="text-xs text-gray-500 font-['Poppins'] font-normal">{item.description}</p>
                                        </div>
                                    </Link>
                                ) : (
                                    <div
                                        key={idx}
                                        onClick={item.onClick}
                                        className="flex items-start gap-3 p-2 rounded-md hover:bg-white cursor-pointer transition"
                                    >
                                        <div className="text-[#615DFA] text-lg">{item.icon}</div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 font-['Poppins']">{item.label}</p>
                                            <p className="text-xs text-gray-500 font-['Poppins'] font-normal">{item.description}</p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </div>
            </h4>

            <p className="mt-[29px] text-[12px] text-[#AFB0C0] font-['Poppins'] mb-[18px]">
                Hi! My name is A B M Shawon Islam but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.
            </p>

            <p className="text-[12px] text-[#AFB0C0] font-['Poppins'] flex gap-[23px]">
                <span className="font-bold">Joined:</span> 22 November 2008
            </p>
            <p className="text-[12px] text-[#AFB0C0] font-['Poppins'] flex gap-[23px] mt-[18px]">
                <span className="font-bold">City:</span> Dhaka
            </p>
            <p className="text-[12px] text-[#AFB0C0] font-['Poppins'] flex gap-[23px] mt-[18px]">
                <span className="font-bold">Age:</span> 18 years
            </p>
        </div>
    );
};

export default AboutMe;