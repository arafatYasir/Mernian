import { useRef, useState, useEffect } from "react";
import { HiOutlinePencilAlt, HiOutlineEye, HiOutlineLockClosed, HiOutlineDownload, HiOutlineTrash } from "react-icons/hi";

const PersonalInfo = () => {
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
            description: "Update your personal details.",
        },
        {
            label: "Privacy Settings",
            icon: <HiOutlineLockClosed />,
            description: "Control who can see this info.",
        },
        {
            label: "Delete Info",
            icon: <HiOutlineTrash />,
            description: "Permanently remove personal details.",
        },
    ];


    return (
        <div className="w-[283px] h-[266px] bg-white rounded-[15px] px-[27px] py-[29px] relative">
            <h4 className="text-sm text-[#3E3F5E] font-['Poppins'] font-bold flex justify-between items-center mb-[26px]">
                <span>Personal Info</span>
                <span
                    className="cursor-pointer text-xl flex justify-center items-center w-[20px] h-[20px]"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    ref={dropdownRef}
                >
                    ...
                </span>
            </h4>

            {dropdownOpen && (
                <div className="absolute top-[60px] right-[20px] w-[250px] bg-[#F7F7FB] rounded-xl shadow-xl p-4 z-50 space-y-3">
                    {dropdownItems.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-2 rounded-md hover:bg-white cursor-pointer transition">
                            <div className="text-[#615DFA] text-lg">{item.icon}</div>
                            <div>
                                <p className="text-sm font-semibold text-gray-800 font-['Poppins']">
                                    {item.label}
                                </p>
                                <p className="text-xs text-gray-500 font-['Poppins']">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <p className="text-[12px] text-[#AFB0C0] font-['Poppins'] flex gap-[15px]">
                <span className="font-bold">Email:</span> shawon.cit.bd@gmail.com
            </p>
            <p className="text-[12px] text-[#AFB0C0] font-['Poppins'] flex gap-[15px] mt-[18px]">
                <span className="font-bold">Birthday:</span> 28 April 1993
            </p>
            <p className="text-[12px] text-[#AFB0C0] font-['Poppins'] flex gap-[15px] mt-[18px]">
                <span className="font-bold">Occupation:</span> MernStack Developer
            </p>
            <p className="text-[12px] text-[#AFB0C0] font-['Poppins'] flex gap-[15px] mt-[18px]">
                <span className="font-bold">Status:</span> Unmarried
            </p>
            <p className="text-[12px] text-[#AFB0C0] font-['Poppins'] flex gap-[15px] mt-[18px]">
                <span className="font-bold">Birthplace:</span> Narayanganj
            </p>
        </div>
    );
};

export default PersonalInfo;