import { useRef, useState, useEffect } from "react";
import LikeIcon from "../icons/LikeIcon";
import ThreeDotsIcon from "../icons/ThreeDotsIcon";
import WowIcon from "../icons/WowIcon";
import LoveIcon from "../icons/LoveIcon";
import ThumbsUpIcon from "../icons/ThumbsUpIcon";
import CommentIcon from "../icons/CommentIcon";
import ShareIcon from "../icons/ShareIcon";
import DislikeIcon from "../icons/DislikeIcon";
import HappyIcon from "../icons/HappyIcon"
import FunnyIcon from "../icons/FunnyIcon"
import AngryIcon from "../icons/AngryIcon";
import SadIcon from "../icons/SadIcon";

import {
    HiOutlinePencilAlt,
    HiOutlineTrash,
    HiOutlineBookmark,
    HiOutlineLink,
} from "react-icons/hi";

const Post = ({ hasVideo, hasImage }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showReactions, setShowReactions] = useState(false);
    const dropdownRef = useRef(null);
    const timerRef = useRef(null)

    const dropdownItems = [
        {
            icon: <HiOutlinePencilAlt />,
            label: "Edit Post",
            desc: "Make changes to your content",
        },
        {
            icon: <HiOutlineTrash />,
            label: "Delete Post",
            desc: "Remove this post permanently",
        },
        {
            icon: <HiOutlineBookmark />,
            label: "Save Post",
            desc: "Keep it for later reference",
        },
        {
            icon: <HiOutlineLink />,
            label: "Copy Link",
            desc: "Share this post via URL",
        }
    ];


    useEffect(() => {
        const handleCloseDropdown = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleCloseDropdown);
        return () => {
            document.removeEventListener("mousedown", handleCloseDropdown);
        }
    }, []);

    return (
        <div className="max-w-[585px] rounded-[15px] font-['Poppins'] py-[15px] pl-4 pr-10 bg-white">
            {/* Post Part */}
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[15px]">
                        <img className="w-[50px] h-[50px]" src="/friend.png" alt="" />
                        <div>
                            <h4 className="text-sm font-bold">A B M Shawon Islam</h4>
                            <p className="text-[#AFB0C0] text-[12px] font-medium">
                                29 minutes ago
                            </p>
                        </div>
                    </div>

                    {/* Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <div
                            className="cursor-pointer p-1 rounded-full hover:bg-gray-100"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <ThreeDotsIcon />
                        </div>

                        {dropdownOpen && (
                            <div className="absolute top-6 right-0 bg-[#F7F7FB] rounded-xl shadow-xl p-4 z-50 w-[240px] space-y-3">
                                {dropdownItems.map((item, idx) => (
                                    <div
                                        onClick={() => setDropdownOpen(false)}
                                        key={idx}
                                        className="flex items-start gap-3 p-2 rounded-md hover:bg-white cursor-pointer transition"
                                    >
                                        <div className="text-[#615DFA] text-lg">{item.icon}</div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 font-['Poppins']">
                                                {item.label}
                                            </p>
                                            <p className="text-xs text-gray-500 font-['Poppins']">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <p className="max-w-[524px] text-[12px] mt-[23px] border-b border-[#D9D9D9] pb-[29px]">
                    I have great news to share with you all! I’ve been officially made a
                    game streaming verified partner by Streamy http://lyt.ly/snej25. What
                    does this mean? I’ll be uploading new content every day, improving
                    the quality and I’m gonna have access to games a month before the
                    official release.
                    <br />
                    This is a dream come true, thanks to all for the support!!!
                </p>

                {/* Post Status */}
                <div className="relative mt-[15px] max-w-[524px]">
                    <div>
                        <div className="absolute top-0 left-0 z-40">
                            <LikeIcon width={20} height={20} />
                        </div>
                        <div className="absolute top-0 left-3.5 z-30">
                            <LoveIcon width={20} height={20} />
                        </div>
                        <div className="absolute top-0 left-7.5 z-20">
                            <WowIcon width={20} height={20} />
                        </div>
                    </div>
                    <div className="flex justify-between font-['Inter'] text-[12px] font-bold pl-[63px]">
                        <p>12</p>
                        <p>13 Comments</p>
                        <p>2 Shares</p>
                    </div>
                </div>
            </div>

            {/* Post functionality Part */}
            <div className="flex justify-between items-center border-t border-[#D9D9D9] pt-[23px] mt-[15px]">
                <div
                    className="flex items-center gap-4 cursor-pointer relative"
                    onMouseEnter={() => {
                        clearTimeout(timerRef.current);
                        setShowReactions(true);
                    }}
                    onMouseLeave={() => {
                        timerRef.current = setTimeout(() => {
                            setShowReactions(false);
                        }, 500);
                    }}
                >
                    <ThumbsUpIcon />
                    <span className="text-[12px] font-bold font-['Inter'] text-[#D9D9D9]">
                        Like
                    </span>

                    {showReactions && (
                        <div
                            className="bg-white w-[408px] h-[63px] rounded-[50px] transition absolute top-[-126px] left-[-16px] flex items-center justify-between px-[13px]"
                            style={{ boxShadow: "0px 1px 4px 1px rgba(0, 0, 0, 0.16)" }}
                        >
                            <LikeIcon />
                            <LoveIcon />
                            <DislikeIcon />
                            <HappyIcon />
                            <FunnyIcon />
                            <WowIcon />
                            <AngryIcon />
                            <SadIcon />
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                    <CommentIcon />
                    <span className="text-[12px] font-bold font-['Inter'] text-[#D9D9D9]">
                        Comment
                    </span>
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                    <ShareIcon />
                    <span className="text-[12px] font-bold font-['Inter'] text-[#D9D9D9]">
                        Share
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Post;