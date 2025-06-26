import { useEffect, useRef, useState } from "react";
import { HiOutlineUpload, HiOutlineCollection, HiOutlinePencilAlt, HiOutlineTrash, HiOutlineRefresh } from "react-icons/hi";
import ThreeDotsIcon from "../icons/ThreeDotsIcon";

const Photos = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const dropdownItems = [
        {
            label: "Upload New Photo",
            icon: <HiOutlineUpload />,
            description: "Add more photos to your gallery.",
        },
        {
            label: "View All",
            icon: <HiOutlineCollection />,
            description: "Open the full photo collection.",
        },
        {
            label: "Delete Photo Set",
            icon: <HiOutlineTrash />,
            description: "Remove this entire photo group.",
        },
        {
            label: "Refresh",
            icon: <HiOutlineRefresh />,
            description: "Reload the latest changes.",
        },
    ];

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
        <div className="w-[283px] h-[413px] bg-white rounded-[15px] mt-[15px] pt-[19px] px-[29px] pb-[29px] relative">
            <div className="flex items-center justify-between">
                <h4 className="text-[12px] font-['Poppins'] font-bold">
                    Photos <span className="text-[#23D2E2]">37</span>
                </h4>

                <div
                    className="w-[27px] h-[27px] rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-200 transition relative"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    ref={dropdownRef}
                >
                    <ThreeDotsIcon />

                    {dropdownOpen && (
                        <div className="absolute top-[35px] right-0 w-[250px] bg-[#F7F7FB] rounded-xl shadow-xl p-4 z-50 space-y-3">
                            {dropdownItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 p-2 rounded-md hover:bg-white cursor-pointer transition"
                                >
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
                </div>
            </div>

            <div className="flex flex-wrap gap-[15px] mt-[17px]">
                <img src="/photo1.png" alt="Photo 1" />
                <img src="/photo2.png" alt="Photo 2" />
                <img src="/photo1.png" alt="Photo 1" />
                <img src="/photo2.png" alt="Photo 2" />
                <img src="/photo1.png" alt="Photo 1" />
                <img src="/photo3.png" alt="Photo 3" />
            </div>
        </div>
    );
};

export default Photos;