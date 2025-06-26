import LikeIcon from "../icons/LikeIcon";
import ThreeDotsIcon from "../icons/ThreeDotsIcon";
import WowIcon from "../icons/WowIcon";
import LoveIcon from "../icons/LoveIcon"
import ThumbsUpIcon from "../icons/ThumbsUpIcon";
import CommentIcon from "../icons/CommentIcon";
import ShareIcon from "../icons/ShareIcon"

const Post = ({ hasVideo, hasImage }) => {
    return (
        <div className="max-w-[585px] rounded-[15px] font-['Poppins'] py-[15px] pl-4 pr-10 bg-white">
            {/* Post Part */}
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[15px]">
                        <img className="w-[50px] h-[50px]" src="/friend.png" alt="" />
                        <div>
                            <h4 className="text-sm font-bold">A B M Shawon Islam</h4>
                            <p className="text-[#AFB0C0] text-[12px] font-medium">29 minutes ago</p>
                        </div>
                    </div>
                    <div>
                        <ThreeDotsIcon />
                    </div>
                </div>

                <p className="max-w-[524px] text-[12px] mt-[23px] border-b border-[#D9D9D9] pb-[29px]">I have great news to share with you all! I’ve been officially made a game streaming verified partner by Streamy http://lyt.ly/snej25. What does this mean? I’ll be uploading new content every day, improving the quality and I’m gonna have access to games a month before the official release.

                    This is a dream come true, thanks to all for the support!!!</p>

                <div className="relative mt-[15px] max-w-[524px]">
                    <div>
                        <div className="absolute top-0 left-0 z-50">
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
                <div className="flex items-center gap-4">
                    <ThumbsUpIcon />
                    <span className="text-[12px] font-bold font-['Inter'] text-[#D9D9D9]">Like</span>
                </div>
                <div className="flex items-center gap-4">
                    <CommentIcon />
                    <span className="text-[12px] font-bold font-['Inter'] text-[#D9D9D9]">Comment</span>
                </div>
                <div className="flex items-center gap-4">
                    <ShareIcon />
                    <span className="text-[12px] font-bold font-['Inter'] text-[#D9D9D9]">Share</span>
                </div>
            </div>
        </div>
    );
};

export default Post;