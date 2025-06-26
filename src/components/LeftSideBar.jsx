import { Link, NavLink } from "react-router";
import NewsIcon from "../icons/NewsIcon";
import ProfileIcon from "../icons/ProfileIcon";
import GroupsIcon from "../icons/GroupsIcon";
import PhotoIcon from "../icons/PhotoIcon";
import FriendsIcon from "../icons/FriendsIcon";
import RequestIcon from "../icons/RequestIcon";
import LogoutIcon from "../icons/LogoutIcon"

const LeftSideBar = () => {
    return (
        <div className="bg-white w-[300px] h-dvh">
            <div className="relative">
                <img src="/small-cover-photo.png" alt="Cover photo" />
                <img className="w-[110px] h-[110px] rounded-full absolute top-4 left-1/2 -translate-x-1/2 border-[5px] border-white" src="/profile-picture.png" />
            </div>
            <div className="mt-[75px] text-center">
                <h4 className="text-black font-['Poppins'] font-bold">A B M Shawon Islam</h4>
                <a className="text-[#AFB0C0] text-[12px] font-['Poppins'] font-medium hover:text-[#615DFA] hover:underline" href="#" target="_blank">www.abm.com</a>
            </div>
            <div className="flex gap-12 justify-center mt-[42px]">
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

            <div className="mt-[54px] flex flex-col items-center">
                <NavLink to="/newsfeed" className="flex items-center gap-[30px] py-[16px] px-5 w-[268px] text-[#AFB0C0]">
                    <NewsIcon />
                    <span className="text-sm font-['Poppins'] font-semibold">Newsfeed</span>
                </NavLink>
                <NavLink to="/profile" className="flex items-center gap-[30px] py-[16px] px-5 w-[268px] text-[#AFB0C0]">
                    <ProfileIcon />
                    <span className="text-sm font-['Poppins'] font-semibold">Profile</span>
                </NavLink>
                <NavLink to="/groups" className="flex items-center gap-[30px] py-[16px] px-5 w-[268px] text-[#AFB0C0]">
                    <GroupsIcon />
                    <span className="text-sm font-['Poppins'] font-semibold">Groups</span>
                </NavLink>
                <NavLink to="/photos" className="flex items-center gap-[30px] py-[16px] px-5 w-[268px] text-[#AFB0C0]">
                    <PhotoIcon />
                    <span className="text-sm font-['Poppins'] font-semibold">Photos</span>
                </NavLink>
                <NavLink to="/friends" className="flex items-center gap-[30px] py-[16px] px-5 w-[268px] text-[#AFB0C0]">
                    <FriendsIcon />
                    <span className="text-sm font-['Poppins'] font-semibold">Friends</span>
                </NavLink>
                <NavLink to="/requests" className="flex items-center gap-[30px] py-[16px] px-5 w-[268px] text-[#AFB0C0]">
                    <RequestIcon />
                    <span className="text-sm font-['Poppins'] font-semibold">Friend Requests</span>
                </NavLink>
                <NavLink to="/logout" className="flex items-center gap-[30px] py-[16px] px-5 w-[268px] text-[#AFB0C0]">
                    <LogoutIcon />
                    <span className="text-sm font-['Poppins'] font-semibold">Logout</span>
                </NavLink>
            </div>
        </div>
    );
};

export default LeftSideBar;