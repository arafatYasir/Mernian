import FacebookIcon from "../icons/FacebookIcon";
import InstaIcon from "../icons/InstaIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

const Friend = ({name, email, friends, posts, followers}) => {
    return (
        <div className="w-[284px] h-[376px] bg-white rounded-[15px]">
            <div className="relative">
                <img className="rounded-t-[15px] w-full h-[83px]" src="/small-cover-photo.png" alt="Cover Photo" />
                <img className="w-[77px] h-[77px] border-[6px] border-white rounded-full absolute -bottom-1/2 left-1/2 -translate-x-1/2" src="/profile-picture.png" alt="Profile Picture" />
            </div>
            <div className="font-['Poppins'] mt-[50px] text-center">
                <h5 className="text-[15px] font-medium">{name}</h5>
                <p className="text-[#AFB0C0] text-[17px]">{email}</p>
            </div>
            
            {/* User Status */}
            <div className="flex gap-12 justify-center mt-[24px]">
                <p className="flex flex-col items-center relative after:content-[''] after:absolute after:w-[1px] after:h-[25px] after:bg-[#AFB0C0] after:top-1/2 after:right-[-25px] after:-translate-y-1/2">
                    <span className="text-black font-['Poppins'] text-sm font-bold">{friends}</span>
                    <span className="text-[#AFB0C0] font-['Poppins'] text-[12px] font-medium">Friends</span>
                </p>
                <p className="flex flex-col items-center relative after:content-[''] after:absolute after:w-[1px] after:h-[25px] after:bg-[#AFB0C0] after:top-1/2 after:right-[-25px] after:-translate-y-1/2">
                    <span className="text-black font-['Poppins'] text-sm font-bold">{posts}</span>
                    <span className="text-[#AFB0C0] font-['Poppins'] text-[12px] font-medium">Posts</span>
                </p>
                <p className="flex flex-col items-center">
                    <span className="text-black font-['Poppins'] text-sm font-bold">{followers}</span>
                    <span className="text-[#AFB0C0] font-['Poppins'] text-[12px] font-medium">Followers</span>
                </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-3 mt-[27px]">
                <div className="cursor-pointer">
                    <FacebookIcon />
                </div>
                <div className="cursor-pointer">
                    <InstaIcon />
                </div>
                <div className="cursor-pointer">
                    <TwitterIcon />
                </div>
                <div className="cursor-pointer">
                    <YoutubeIcon />
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-[30px]">
                <button className="w-[50%] py-[8.5px] bg-[#615DFA] text-white text-[13px] font-['Poppins'] font-semibold cursor-pointer rounded-bl-[15px]">Add Friend</button>
                <button className="w-[50%] py-[8.5px] bg-[#23D2E2] text-white text-[13px] font-['Poppins'] font-semibold cursor-pointer rounded-br-[15px]">Send Message</button>
            </div>
        </div>
    );
};

export default Friend;