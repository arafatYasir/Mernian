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
import Comment from "./Comment";

const Post = ({ hasVideo, hasImage }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showReactions, setShowReactions] = useState(false);
    const [reactionName, setReactionName] = useState(null);
    const [reactedIcon, setReactedIcon] = useState(null);
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [commentLimit, setCommentLimit] = useState(2);
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

    const reactionIcons = [
        { icon: <LikeIcon width={20} height={20} />, label: "Like" },
        { icon: <LoveIcon width={20} height={20} />, label: "Love" },
        { icon: <DislikeIcon width={20} height={20} />, label: "Dislike" },
        { icon: <HappyIcon width={20} height={20} />, label: "Happy" },
        { icon: <FunnyIcon width={20} height={20} />, label: "Funny" },
        { icon: <WowIcon width={20} height={20} />, label: "Wow" },
        { icon: <AngryIcon width={20} height={20} />, label: "Angry" },
        { icon: <SadIcon width={20} height={20} />, label: "Sad" },
    ];

    const comments = [
        {
            id: 1,
            user: "Nadia Jahan",
            comment: "Such a great vibe here. Looking forward to another amazing session like the last one!",
            posted: "10 minutes ago"
        },
        {
            id: 2,
            user: "Imran Kabir",
            comment: "Honestly, the energy in these streams is unmatched. Keep doing what you're doing!",
            posted: "22 minutes ago"
        },
        {
            id: 3,
            user: "Farhana Akter",
            comment: "If it's anything like the previous stream, it's gonna be a blast! Let's gooo!",
            posted: "7 minutes ago"
        },
        {
            id: 4,
            user: "Rasel Ahmed",
            comment: "Always a highlight of my week. So pumped for this one!",
            posted: "12 minutes ago"
        },
        {
            id: 5,
            user: "Tania Sultana",
            comment: "Excited to join again! The last one had such good vibes and energy.",
            posted: "18 minutes ago"
        }
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
        <div className="bg-white rounded-[15px] font-['Poppins'] ">
            <div className="max-w-[585px]  py-[15px] pl-4 pr-10">
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

                    {/* If the post has a image or video */}
                    <div className={`border-b border-[#D9D9D9] ${hasImage || hasVideo ? "pb-[15px]" : "pb-[29px]"}`}>
                        <p className="max-w-[524px] text-[12px] mt-[23px]">
                            I have great news to share with you all! I’ve been officially made a
                            game streaming verified partner by Streamy http://lyt.ly/snej25. What
                            does this mean? I’ll be uploading new content every day, improving
                            the quality and I’m gonna have access to games a month before the
                            official release.
                            <br />
                            This is a dream come true, thanks to all for the support!!!
                        </p>

                        {hasImage && (
                            <div className="mt-[15px]">
                                <img src="/post-image.png" alt="Post Image" />
                            </div>
                        )}

                        {hasVideo && <>
                            <div onClick={() => setVideoModalOpen(true)} className="mt-[15px] relative cursor-pointer">
                                <img className="w-full h-[349px] object-cover" src="/video-thumbnail.png" alt="Video Thubmnail" />

                                <img className="absolute top-1/2 left-1/2 -translate-1/2" src="/big-play-icon.png" alt="Play Icon" />
                            </div>

                            {videoModalOpen && (
                                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
                                    <div className="rounded-2xl p-6 w-full max-w-[700px] relative">

                                        {/* Close Button */}
                                        <button
                                            onClick={() => setVideoModalOpen(false)}
                                            className="absolute -top-1 -right-1 text-black hover:text-[#615DFA] text-4xl transition cursor-pointer"
                                        >
                                            &times;
                                        </button>

                                        {/* Video */}
                                        <video
                                            src="/videos/video.mp4"
                                            controls
                                            autoPlay
                                            className="w-full h-auto rounded-xl"
                                        ></video>
                                    </div>
                                </div>
                            )}
                        </>}
                    </div>

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
            </div>

            {/* Post functionality Part */}
            <div className="flex justify-between bg-[#FCFCFD] items-center border-t border-[#D9D9D9] pt-[23px] pl-[20px] pr-[45px] pb-[20px]">
                {/* Showing all the reactions on hover on like */}
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
                    {reactedIcon !== null ? <>{reactionIcons[reactedIcon].icon}</> : <ThumbsUpIcon />}
                    <span className="text-[12px] font-bold font-['Inter'] text-[#D9D9D9]">
                        {reactedIcon ? <p>{reactionIcons[reactedIcon].label}</p> : <p>Like</p>}
                    </span>

                    {showReactions && (
                        <div
                            className="bg-white w-[408px] h-[63px] rounded-[50px] transition absolute top-[-127px] left-[-18px] flex items-center justify-between px-[13px] z-50"
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

                <div onClick={() => setShowComments(prev => !prev)} className="flex items-center gap-4 cursor-pointer">
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

            {/* Comments */}
            {
                showComments && <>
                    <div className="border-t border-[#D9D9D9] max-w-[585px]">
                        {comments.slice(0, commentLimit).map(c => <Comment key={c.id} user={c.user} comment={c.comment} posted={c.posted} />)}
                    </div>

                    {
                        commentLimit < comments.length ? (
                            <div
                                className="border-b border-t border-[#D9D9D9] text-center py-4 cursor-pointer max-w-[585px]"
                                onClick={() => setCommentLimit(comments.length)}
                            >
                                <p className="text-[#3E3F5E] text-[12px] font-['Poppins']">Load More comments <span className="text-[#01C7D9] font-medium">9+</span></p>
                            </div>
                        ) : (<></>)
                    }

                    <div className="py-[18px] px-[26px] flex items-center gap-[22px] max-w-[585px]">
                        <div>
                            <img className="min-w-[38px] min-h-[38px]" src="/friend.png" alt="User Image" />
                        </div>
                        <div>
                            <input className="w-[476px] h-[48px] border border-[#D9D9D9] bg-white rounded-[13px] p-[15px] text-[12px] text-[#D9D9D9] font-['Poppins'] font-semibold outline-none" type="text" placeholder="Your reply" />
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default Post;