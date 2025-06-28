import { useRef, useState, useEffect } from "react";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

const Interests = () => {
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
        <div className="w-[594px] h-[450px] bg-white rounded-[15px] pt-[14px] pl-[30px] pr-10 relative">
            <div className="flex justify-between items-center">
                <h4 className="text-sm text-[#3E3F5E] font-['Poppins'] font-bold">Interests</h4>
                <div className="relative" ref={dropdownRef}>
                    <span
                        className="cursor-pointer text-xl font-bold flex justify-center items-center w-[20px] h-[20px] "
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        ...
                    </span>

                    {dropdownOpen && (
                        <div onClick={() => setDropdownOpen(false)} className="absolute top-[28px] right-0 w-[180px] bg-[#F7F7FB] rounded-xl shadow-xl p-3 z-50 space-y-2">
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
            </div>

            <div className="flex flex-col gap-[40px] mt-[21px]">
                <div className="font-['Poppins'] text-[12px]">
                    <h4 className="font-medium mb-1.5">Favourite TV Shows</h4>
                    <p className="text-[#181828]">
                        Breaking Good, Red Devil, People of Interest, The Running Dead, Found, American Guy, Game of Wars — shows that keep me hooked with every twist.
                    </p>
                </div>
                <div className="font-['Poppins'] text-[12px]">
                    <h4 className="font-medium mb-1.5">Favourite Movies</h4>
                    <p className="text-[#181828]">
                        Inception, Matrix, Interstellar, Joker, Parasite — movies that challenge my mind and stay in my heart long after the credits roll.
                    </p>
                </div>
                <div className="font-['Poppins'] text-[12px]">
                    <h4 className="font-medium mb-1.5">Hobbies</h4>
                    <p className="text-[#181828]">
                        Coding projects, biking through quiet streets, reading sci-fi thrillers, playing chess, and taking photos that tell a story.
                    </p>
                </div>
                <div className="font-['Poppins'] text-[12px]">
                    <h4 className="font-medium mb-1.5">Books I Like</h4>
                    <p className="text-[#181828]">
                        Atomic Habits, The Alchemist, Deep Work, Clean Code — books that inspire personal growth and sharpen my technical edge.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Interests;
