import { useEffect, useRef, useState } from "react";
import { HiOutlineUpload, HiOutlineCollection, HiOutlineTrash, HiOutlineRefresh } from "react-icons/hi";
import ThreeDotsIcon from "../icons/ThreeDotsIcon";

const Videos = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const dropdownRef = useRef(null);

    const dropdownItems = [
        {
            label: "Upload New Video",
            icon: <HiOutlineUpload />,
            description: "Add more videos to your collection.",
        },
        {
            label: "View All",
            icon: <HiOutlineCollection />,
            description: "Open your full video list.",
        },
        {
            label: "Delete Video Set",
            icon: <HiOutlineTrash />,
            description: "Remove this entire video group.",
        },
        {
            label: "Refresh",
            icon: <HiOutlineRefresh />,
            description: "Reload the latest changes.",
        },
    ];

    const videoList = [
        { id: 1, src: "/videos/video.mp4", poster: "/video-thumbnail.png" },
        { id: 2, src: "/videos/video.mp4", poster: "/video-thumbnail.png" },
        { id: 3, src: "/videos/video.mp4", poster: "/video-thumbnail.png" },
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
        <div className="w-[283px] min-h-[413px] bg-white rounded-[15px] mt-[15px] pt-[19px] px-[29px] pb-[29px] relative">
            <div className="flex items-center justify-between">
                <h4 className="text-[12px] font-['Poppins'] font-bold">
                    Videos <span className="text-[#23D2E2]">{videoList.length}</span>
                </h4>

                {/* Dropdown */}
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

            {/* Video thumbnails */}
            <div className="flex flex-wrap gap-[15px] mt-[17px]">
                {videoList.map((video) => (
                    <div
                        key={video.id}
                        className="cursor-pointer w-[225px] h-[100px] rounded-[10px] overflow-hidden relative"
                        onClick={() => {
                            setCurrentVideo(video.src);
                            setModalOpen(true);
                        }}
                    >
                        <img src={video.poster} alt={`Thumbnail ${video.id}`} className="w-full h-full object-cover" />

                        <img className="absolute top-1/2 left-1/2 -translate-1/2" src="/video-play-icon.png" alt="Video Play Icon" />
                    </div>
                ))}
            </div>

            {/* Video modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
                    <div className="rounded-2xl p-6 w-full max-w-[700px] relative">

                        {/* Close Button */}
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-0 right-0 text-black hover:text-[#615DFA] text-3xl transition cursor-pointer"
                            aria-label="Close"
                        >
                            &times;
                        </button>

                        {/* Video */}
                        <video
                            src={currentVideo}
                            controls
                            autoPlay
                            className="w-full h-auto rounded-xl"
                        ></video>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Videos;