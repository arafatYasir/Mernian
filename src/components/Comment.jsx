import { useState, useRef, useEffect } from "react";
import ThreeDotsIcon from "../icons/ThreeDotsIcon";
import LikeIcon from "../icons/LikeIcon";
import WowIcon from "../icons/WowIcon";
import LoveIcon from "../icons/LoveIcon";
import DislikeIcon from "../icons/DislikeIcon";
import HappyIcon from "../icons/HappyIcon";
import FunnyIcon from "../icons/FunnyIcon";
import AngryIcon from "../icons/AngryIcon";
import SadIcon from "../icons/SadIcon";

const Comment = ({ user, comment, posted, showWow = true }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showReactions, setShowReactions] = useState(false);
    const [reactionName, setReactionName] = useState(null);
    const [reactedIcon, setReactedIcon] = useState(null);
    const timerRef = useRef(null);
    const dropdownRef = useRef(null);

    // Reaction Icons
    const reactionIcons = [
        { icon: <LikeIcon width={20} height={20} />, },
        { icon: <LoveIcon width={20} height={20} />, },
        { icon: <DislikeIcon width={20} height={20} />, },
        { icon: <HappyIcon width={20} height={20} />, },
        { icon: <FunnyIcon width={20} height={20} />, },
        { icon: <WowIcon width={20} height={20} />, },
        { icon: <AngryIcon width={20} height={20} />, },
        { icon: <SadIcon width={20} height={20} />, },
    ];

    const checkAndSetIcon = (value) => {
        if (reactedIcon === null || reactedIcon !== value) {
            setReactedIcon(value);
        }
        else {
            setReactedIcon(null);
        }

        setShowReactions(false);
    }

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

                    <div className="text-[12px] text-[#AFB0C0] font-['Poppins'] font-medium flex items-center gap-[25px] relative">
                        <div className="absolute">
                            <div className="absolute top-[-10px] left-0 z-50">
                                <LikeIcon width={20} height={20} />
                            </div>
                            {
                                showWow && <div className="absolute top-[-10px] left-3">
                                <WowIcon width={20} height={20} />
                            </div>
                            }
                        </div>
                        {/* Comment Reaction Functionality */}
                        <span
                            className="ml-[50px] cursor-pointer"
                            onMouseEnter={() => {
                                clearTimeout(timerRef.current);
                                setShowReactions(true);
                            }}
                            onMouseLeave={() => {
                                timerRef.current = setTimeout(() => {
                                    setShowReactions(false);
                                }, 400)
                            }}
                        >{reactedIcon !== null ? <>{reactionIcons[reactedIcon].icon}</> : "React!"}</span>

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

                        {/* Reaction Icons to show on hover */}
                        {showReactions && (
                            <div
                                onMouseEnter={() => {
                                    clearTimeout(timerRef.current);
                                    setShowReactions(true);
                                }}
                                onMouseLeave={() => {
                                    timerRef.current = setTimeout(() => {
                                        setShowReactions(false);
                                    }, 400)
                                }}
                                className="bg-white w-[408px] h-[63px] rounded-[50px] transition absolute top-[-70px] left-[-12px] flex items-center justify-between px-[13px] z-50"
                                style={{ boxShadow: "0px 1px 4px 1px rgba(0, 0, 0, 0.16)" }}
                            >
                                <div onClick={() => checkAndSetIcon(0)} className="relative" onMouseEnter={() => setReactionName("Like")} onMouseLeave={() => setReactionName("")}>
                                    <LikeIcon scale={120} />
                                    {reactionName === "Like" && <p className="text-[12px] text-white font-['Poppins'] bg-[#45437F] rounded-[22px] pt-[3px] pb-[4px] px-[11px] absolute top-[-30px] left-1/2 -translate-x-1/2">Like</p>}
                                </div>
                                <div onClick={() => checkAndSetIcon(1)} className="relative" onMouseEnter={() => setReactionName("Love")} onMouseLeave={() => setReactionName("")}>
                                    <LoveIcon scale={120} />
                                    {reactionName === "Love" && <p className="text-[12px] text-white font-['Poppins'] bg-[#45437F] rounded-[22px] pt-[3px] pb-[4px] px-[11px] absolute top-[-30px] left-1/2 -translate-x-1/2">Love</p>}
                                </div>
                                <div onClick={() => checkAndSetIcon(2)} className="relative" onMouseEnter={() => setReactionName("Dislike")} onMouseLeave={() => setReactionName("")}>
                                    <DislikeIcon scale={120} />
                                    {reactionName === "Dislike" && <p className="text-[12px] text-white font-['Poppins'] bg-[#45437F] rounded-[22px] pt-[3px] pb-[4px] px-[11px] absolute top-[-30px] left-1/2 -translate-x-1/2">Dislike</p>}
                                </div>
                                <div onClick={() => checkAndSetIcon(3)} className="relative" onMouseEnter={() => setReactionName("Happy")} onMouseLeave={() => setReactionName("")}>
                                    <HappyIcon scale={120} />
                                    {reactionName === "Happy" && <p className="text-[12px] text-white font-['Poppins'] bg-[#45437F] rounded-[22px] pt-[3px] pb-[4px] px-[11px] absolute top-[-30px] left-1/2 -translate-x-1/2">Happy</p>}
                                </div>
                                <div onClick={() => checkAndSetIcon(4)} className="relative" onMouseEnter={() => setReactionName("Funny")} onMouseLeave={() => setReactionName("")}>
                                    <FunnyIcon scale={120} />
                                    {reactionName === "Funny" && <p className="text-[12px] text-white font-['Poppins'] bg-[#45437F] rounded-[22px] pt-[3px] pb-[4px] px-[11px] absolute top-[-30px] left-1/2 -translate-x-1/2">Funny</p>}
                                </div>
                                <div onClick={() => checkAndSetIcon(5)} className="relative" onMouseEnter={() => setReactionName("Wow")} onMouseLeave={() => setReactionName("")}>
                                    <WowIcon scale={120} />
                                    {reactionName === "Wow" && <p className="text-[12px] text-white font-['Poppins'] bg-[#45437F] rounded-[22px] pt-[3px] pb-[4px] px-[11px] absolute top-[-30px] left-1/2 -translate-x-1/2">Wow</p>}
                                </div>
                                <div onClick={() => checkAndSetIcon(6)} className="relative" onMouseEnter={() => setReactionName("Angry")} onMouseLeave={() => setReactionName("")}>
                                    <AngryIcon scale={120} />
                                    {reactionName === "Angry" && <p className="text-[12px] text-white font-['Poppins'] bg-[#45437F] rounded-[22px] pt-[3px] pb-[4px] px-[11px] absolute top-[-30px] left-1/2 -translate-x-1/2">Angry</p>}
                                </div>
                                <div onClick={() => checkAndSetIcon(7)} className="relative" onMouseEnter={() => setReactionName("Sad")} onMouseLeave={() => setReactionName("")}>
                                    <SadIcon scale={120} />
                                    {reactionName === "Sad" && <p className="text-[12px] text-white font-['Poppins'] bg-[#45437F] rounded-[22px] pt-[3px] pb-[4px] px-[11px] absolute top-[-30px] left-1/2 -translate-x-1/2">Sad</p>}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
