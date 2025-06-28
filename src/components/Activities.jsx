import { useRef, useState, useEffect } from "react";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

const Activities = () => {
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

    return (
        <div className="w-[594px] h-[439px] bg-white rounded-[15px] pt-[14px] pb-[26px] pl-[30px] pr-10 relative">
            <h4 className="text-sm text-[#3E3F5E] font-['Poppins'] font-bold flex justify-between items-center">
                <span>Jobs & Education</span>
                <div className="relative" ref={dropdownRef}>
                    <span
                        className="cursor-pointer text-xl font-bold flex justify-center items-center w-[20px] h-[20px]"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        ...
                    </span>

                    {dropdownOpen && (
                        <div onClick={() => setDropdownOpen(false)} className="absolute top-full right-0 mt-2 w-[180px] bg-[#F7F7FB] rounded-xl shadow-xl p-3 z-50 space-y-2">
                            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white cursor-pointer transition">
                                <HiOutlinePencilAlt className="text-[#615DFA]" />
                                <p className="text-sm font-medium text-gray-800 font-['Poppins']">Edit</p>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white cursor-pointer transition">
                                <HiOutlineTrash className="text-[#615DFA]" />
                                <p className="text-sm font-medium text-gray-800 font-['Poppins']">Clear All</p>
                            </div>
                        </div>
                    )}
                </div>
            </h4>

            <div className="flex flex-col gap-[40px] mt-[21px]">
                <div className="font-['Poppins'] text-[12px]">
                    <h4 className="font-medium mb-1.5">Lead custom designer</h4>
                    <p className="text-[#181828]">Breaking good, Red devil, People of interest, The running dead, Found, American guy Game of wars.</p>
                </div>
                <div className="font-['Poppins'] text-[12px]">
                    <h4 className="font-medium mb-1.5">Mernstack developer</h4>
                    <p className="text-[#181828]">Breaking good, Red devil, People of interest, The running dead, Found, American guy Game of wars.</p>
                </div>
                <div className="font-['Poppins'] text-[12px]">
                    <h4 className="font-medium mb-1.5">Frontend developer</h4>
                    <p className="text-[#181828]">Breaking good, Red devil, People of interest, The running dead, Found, American guy Game of wars.</p>
                </div>
                <div className="font-['Poppins'] text-[12px]">
                    <h4 className="font-medium mb-1.5">AWS</h4>
                    <p className="text-[#181828]">Breaking good, Red devil, People of interest, The running dead, Found, American guy Game of wars.</p>
                </div>
            </div>
        </div>
    );
};

export default Activities;
