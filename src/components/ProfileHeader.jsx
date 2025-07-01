import FacebookIcon from "../icons/FacebookIcon"
import InstaIcon from "../icons/InstaIcon"
import TwitterIcon from "../icons/TwitterIcon"
import YoutubeIcon from "../icons/YoutubeIcon"

const ProfileHeader = () => {
    return (
        <div className="max-w-[1185px]">
            <div>
                <img className="w-[1185px] h-[300px]" src="/big-cover-photo.png" alt="Profile cover photo" />
            </div>
            <div className="w-full h-[125px] relative bg-white rounded-b-[10px] pt-[65px] pl-[65px]">
                <div className="flex gap-12">
                    <p className="flex flex-col items-center relative after:content-[''] after:absolute after:w-[1px] after:h-[25px] after:bg-[#AFB0C0] after:top-1/2 after:right-[-25px] after:-translate-y-1/2">
                        <span className="text-black font-['Poppins'] text-sm font-bold">930</span>
                        <span className="text-[#AFB0C0] font-['Poppins'] text-[12px] font-medium">Friends</span>
                    </p>
                    <p className="flex flex-col items-center relative after:content-[''] after:absolute after:w-[1px] after:h-[25px] after:bg-[#AFB0C0] after:top-1/2 after:right-[-25px] after:-translate-y-1/2">
                        <span className="text-black font-['Poppins'] text-sm font-bold">87</span>
                        <span className="text-[#AFB0C0] font-['Poppins'] text-[12px] font-medium">Posts</span>
                    </p>
                    <p className="flex flex-col items-center">
                        <span className="text-black font-['Poppins'] text-sm font-bold">1k</span>
                        <span className="text-[#AFB0C0] font-['Poppins'] text-[12px] font-medium">Followers</span>
                    </p>
                </div>
                <div>
                    <img className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[130px] h-[130px] border-[9px] rounded-full border-white" src="/big-profile-picture.png" alt="" />
                </div>

                <div className="text-center absolute top-[60px] left-1/2 -translate-x-1/2">
                    <h4 className="text-black font-['Poppins'] font-bold">A B M Shawon Islam</h4>
                    <a className="text-[#AFB0C0] text-[12px] font-['Poppins'] font-medium hover:text-[#615DFA] hover:underline" href="#" target="_blank">www.abm.com</a>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3 absolute top-[65px] right-[65px] cursor-pointer">
                    <FacebookIcon />
                    <InstaIcon />
                    <TwitterIcon />
                    <YoutubeIcon />
                </div>

                {/* Buttons */}
                <div className="flex gap-4 absolute top-[-26px] right-[27px]">
                    <button className="bg-[#615DFA] px-[52px] py-[14px] rounded-[7px] text-white font-['Poppins'] text-sm font-semibold cursor-pointer">Add Friend</button>
                    <button className="bg-[#23D2E2] px-[52px] py-[14px] rounded-[7px] text-white font-['Poppins'] text-sm font-semibold cursor-pointer">Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;