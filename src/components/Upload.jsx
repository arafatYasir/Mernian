import StatusIcon from "../icons/StatusIcon";
import GroupsIcon from "../icons/GroupsIcon";
import { useState, useRef, useEffect } from "react";
import AlbumIcon from "../icons/AlbumIcon";
import CameraIcon from "../icons/CameraIcon";
import AdditionalInformation from "./AdditionalInformation";

const Upload = () => {
    const [currentlyOpen, setCurrentlyOpen] = useState("status");

    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Product Category");
    const [selectedColor, setSelectedColor] = useState("Product Color");
    const [selectedSize, setSelectedSize] = useState("Product Size");

    const categories = ["Electronics", "Fashion", "Home & Kitchen", "Books", "Sports & Outdoors"];
    const colors = ["Red", "Blue", "Green", "Black", "White", "Yellow"];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

    const categoryRef = useRef(null);
    const colorRef = useRef(null);
    const sizeRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                categoryRef.current?.contains(event.target) ||
                colorRef.current?.contains(event.target) ||
                sizeRef.current?.contains(event.target)
            ) {
                return;
            }
            setOpenDropdown(null);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = (name) => {
        setOpenDropdown((prev) => (prev === name ? null : name));
    };

    return (
        <div className="w-[585px] min-h-[303px] bg-white mb-[18px] rounded-[15px]">
            {/* Header Part */}
            <div className="flex cursor-pointer">
                <div
                    onClick={() => setCurrentlyOpen("status")}
                    className={`flex items-center gap-4 w-[50%] text-[#DEDEDE] justify-center py-[29px] rounded-tl-[15px] ${currentlyOpen === "status" ? "bg-[#615DFA] text-white" : ""
                        } transition`}
                >
                    <StatusIcon />
                    <p className="text-[12px] font-['Inter'] font-bold">Status</p>
                </div>
                <div
                    onClick={() => setCurrentlyOpen("upload")}
                    className={`flex items-center gap-4 w-[50%] text-[#DEDEDE] justify-center py-[29px] rounded-tr-[15px] ${currentlyOpen === "upload" ? "bg-[#615DFA] text-white" : ""
                        } transition`}
                >
                    <GroupsIcon />
                    <p className="text-[12px] font-['Inter'] font-bold">Product Upload</p>
                </div>
            </div>

            {currentlyOpen === "status" ? (
                // Status Section
                <div>
                    <textarea
                        className="w-full bg-[#FCFCFD] h-[150px] border-t border-b border-[#D9D9D9] outline-none pt-[25px] pl-[25px] placeholder:text-[#AFB0C0] text-[12px] font-light font-['Inter'] resize-none"
                        placeholder="Hi, A B M Shawon Islam, Share your post ..."
                    ></textarea>

                    <div className="px-[28px] py-[17px] flex items-center justify-between">
                        <div className="flex items-center gap-5 cursor-pointer">
                            <CameraIcon />
                            <AlbumIcon />
                        </div>
                        <div className="flex gap-5">
                            <button className="text-white text-[12px] font-['Inter'] font-bold bg-[#181828] rounded-[6px] px-[37px] py-3 cursor-pointer">
                                Discard
                            </button>
                            <button className="text-white text-[12px] font-['Inter'] font-bold bg-[#615DFA] rounded-[6px] px-[37px] py-3 cursor-pointer">
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                // Product Upload Section
                <div>
                    <div className="border-t border-b border-[#D9D9D9] pt-[29px] pb-[17px] px-[22px]">
                        <div className="flex flex-wrap gap-[10px]">
                            {/* Inputs & Others */}
                            <input
                                className="placeholder:text-[#D9D9D9] w-[265px] h-[30px] text-[12px] font-['Inter'] px-[10px] py-[7.5px] border border-[#D9D9D9] rounded-[5px] outline-none"
                                type="text"
                                placeholder="Product Name"
                            />

                            <input
                                className="placeholder:text-[#D9D9D9] w-[265px] h-[30px] text-[12px] font-['Inter'] px-[10px] py-[7.5px] border border-[#D9D9D9] rounded-[5px] outline-none"
                                type="text"
                                placeholder="Product Price"
                            />

                            {/* Category Dropdown */}
                            <div ref={categoryRef} className="relative w-[265px] text-[12px] font-['Inter']">
                                <select className="hidden" value={selectedCategory}></select>
                                <div
                                    onClick={() => toggleDropdown("category")}
                                    className="h-[30px] w-full px-[10px] py-[7.5px] border border-[#D9D9D9] rounded-[5px] flex items-center justify-between cursor-pointer"
                                >
                                    <span
                                        className={`${selectedCategory === "Product Category"
                                            ? "text-[#D9D9D9]"
                                            : "text-[#181818]"
                                            }`}
                                    >
                                        {selectedCategory}
                                    </span>
                                    <svg
                                        className={`w-4 h-4 transition-transform ${openDropdown === "category" ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        stroke="#D9D9D9"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                {openDropdown === "category" && (
                                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow z-10">
                                        {categories.map((category, index) => (
                                            <div
                                                key={index}
                                                onClick={() => {
                                                    setSelectedCategory(category);
                                                    setOpenDropdown(null);
                                                }}
                                                className="px-[10px] py-[7.5px] hover:bg-gray-100 cursor-pointer text-[#181818]"
                                            >
                                                {category}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Color Dropdown */}
                            <div ref={colorRef} className="relative w-[265px] text-[12px] font-['Inter']">
                                <select className="hidden" value={selectedColor}></select>
                                <div
                                    onClick={() => toggleDropdown("color")}
                                    className="h-[30px] w-full px-[10px] py-[7.5px] border border-[#D9D9D9] rounded-[5px] flex items-center justify-between cursor-pointer"
                                >
                                    <span
                                        className={`${selectedColor === "Product Color"
                                            ? "text-[#D9D9D9]"
                                            : "text-[#181818]"
                                            }`}
                                    >
                                        {selectedColor}
                                    </span>
                                    <svg
                                        className={`w-4 h-4 transition-transform ${openDropdown === "color" ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        stroke="#D9D9D9"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                {openDropdown === "color" && (
                                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow z-10">
                                        {colors.map((color, index) => (
                                            <div
                                                key={index}
                                                onClick={() => {
                                                    setSelectedColor(color);
                                                    setOpenDropdown(null);
                                                }}
                                                className="px-[10px] py-[7.5px] hover:bg-gray-100 cursor-pointer text-[#181818]"
                                            >
                                                {color}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Size Dropdown */}
                            <div ref={sizeRef} className="relative w-[265px] text-[12px] font-['Inter']">
                                <select className="hidden" value={selectedSize}></select>
                                <div
                                    onClick={() => toggleDropdown("size")}
                                    className="h-[30px] w-full px-[10px] py-[7.5px] border border-[#D9D9D9] rounded-[5px] flex items-center justify-between cursor-pointer"
                                >
                                    <span
                                        className={`${selectedSize === "Product Size"
                                            ? "text-[#D9D9D9]"
                                            : "text-[#181818]"
                                            }`}
                                    >
                                        {selectedSize}
                                    </span>
                                    <svg
                                        className={`w-4 h-4 transition-transform ${openDropdown === "size" ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        stroke="#D9D9D9"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                {openDropdown === "size" && (
                                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow z-10">
                                        {sizes.map((size, index) => (
                                            <div
                                                key={index}
                                                onClick={() => {
                                                    setSelectedSize(size);
                                                    setOpenDropdown(null);
                                                }}
                                                className="px-[10px] py-[7.5px] hover:bg-gray-100 cursor-pointer text-[#181818]"
                                            >
                                                {size}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <input
                                className="placeholder:text-[#D9D9D9] w-[265px] h-[30px] text-[12px] font-['Inter'] px-[10px] py-[7.5px] border border-[#D9D9D9] rounded-[5px] outline-none"
                                type="number"
                                placeholder="Product Quantity"
                            />

                            {/* Image Preview & Thubnail Indicators */}
                            <div className="w-[265px] h-[30px] bg-[#24234B] rounded-[5px] text-white text-[12px] font-['Inter'] flex items-center justify-center">Image Preview</div>
                            <div className="w-[265px] h-[30px] bg-[#1877F2] rounded-[5px] text-white text-[12px] font-['Inter'] flex items-center justify-center">Image Thumbnail</div>

                            {/* Image Preview & Thumbnail */}
                            <div>
                                <img src="/image-preview.png" alt="Image Preview" />
                            </div>
                            <div>
                                <img src="/image-thumbnail.png" alt="Image Thumbnail" />
                            </div>

                            {/* Product Description Input */}
                            <textarea className="w-full h-[71px] outline-none resize-none text-[12px] font-['Inter'] placeholder:text-[#D9D9D9] border border-[#D9D9D9] rounded-[5px] pt-[10px] pl-[10px]" placeholder="Product Description"></textarea>

                            {/* Additional Informations */}
                            <AdditionalInformation />
                        </div>
                    </div>
                    <div className="py-[19px] flex gap-5 justify-end px-[28px]">
                        <button className="text-white text-[12px] font-['Inter'] font-bold bg-[#181828] rounded-[6px] px-[37px] py-3 cursor-pointer">
                            Discard
                        </button>
                        <button className="text-white text-[12px] font-['Inter'] font-bold bg-[#615DFA] rounded-[6px] px-[37px] py-3 cursor-pointer">
                            Post
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Upload;
