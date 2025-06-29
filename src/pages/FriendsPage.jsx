import { useState } from "react";
import Friend from "../components/Friend";
import ProfileHeader from "../components/ProfileHeader";
import SearchIcon2 from "../icons/SearchIcon2";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

const FriendsPage = () => {
    const friends = [
        { id: 1, name: "Ayaan Rahman", email: "ayaan@gmail.com", friends: 123, posts: 34, followers: "3k" },
        { id: 2, name: "Mira Sultana", email: "mira@gmail.com", friends: 235, posts: 22, followers: "5k" },
        { id: 3, name: "Tariq Islam", email: "tariq@gmail.com", friends: 456, posts: 11, followers: "6k" },
        { id: 4, name: "Sara Kabir", email: "sara@gmail.com", friends: 398, posts: 19, followers: "2k" },
        { id: 5, name: "Nayeem Hasan", email: "nayeem@gmail.com", friends: 342, posts: 40, followers: "8k" },
        { id: 6, name: "Rida Chowdhury", email: "rida@gmail.com", friends: 276, posts: 36, followers: "1k" },
        { id: 7, name: "Zahid Hossain", email: "zahid@gmail.com", friends: 311, posts: 45, followers: "4k" },
        { id: 8, name: "Fatima Noor", email: "fatima@gmail.com", friends: 199, posts: 29, followers: "7k" },
        { id: 9, name: "Rafiq Adnan", email: "rafiq@gmail.com", friends: 407, posts: 13, followers: "5k" },
        { id: 10, name: "Lamia Zerin", email: "lamia@gmail.com", friends: 365, posts: 17, followers: "3k" },
        { id: 11, name: "Shuvo Alam", email: "shuvo@gmail.com", friends: 432, posts: 25, followers: "9k" },
        { id: 12, name: "Nusrat Jahan", email: "nusrat@gmail.com", friends: 144, posts: 28, followers: "2k" },
        { id: 13, name: "Kazi Ovi", email: "ovi@gmail.com", friends: 287, posts: 32, followers: "1k" },
        { id: 14, name: "Nadia Sultana", email: "nadia@gmail.com", friends: 369, posts: 20, followers: "6k" },
        { id: 15, name: "Imran Talukder", email: "imran@gmail.com", friends: 398, posts: 27, followers: "5k" },
        { id: 16, name: "Mehazabien Hoque", email: "mehazabien@gmail.com", friends: 411, posts: 33, followers: "4k" },
        { id: 17, name: "Sakib Rafi", email: "sakib@gmail.com", friends: 277, posts: 18, followers: "3k" },
        { id: 18, name: "Raihan Hossain", email: "raihan@gmail.com", friends: 321, posts: 12, followers: "1k" },
        { id: 19, name: "Rokeya Sultana", email: "rokeya@gmail.com", friends: 229, posts: 30, followers: "6k" },
        { id: 20, name: "Tanvir Ahmed", email: "tanvir@gmail.com", friends: 347, posts: 16, followers: "2k" },
        { id: 21, name: "Munia Rahman", email: "munia@gmail.com", friends: 215, posts: 24, followers: "3k" },
        { id: 22, name: "Zubaer Khan", email: "zubaer@gmail.com", friends: 301, posts: 29, followers: "7k" },
        { id: 23, name: "Afra Tuli", email: "afra@gmail.com", friends: 279, posts: 21, followers: "4k" },
        { id: 24, name: "Niloy Islam", email: "niloy@gmail.com", friends: 400, posts: 15, followers: "5k" },
        { id: 25, name: "Sadia Amin", email: "sadia@gmail.com", friends: 310, posts: 37, followers: "6k" },
        { id: 26, name: "Zarif Mahmud", email: "zarif@gmail.com", friends: 228, posts: 10, followers: "1k" },
        { id: 27, name: "Moinul Hasan", email: "moinul@gmail.com", friends: 392, posts: 28, followers: "3k" },
        { id: 28, name: "Anika Chowdhury", email: "anika@gmail.com", friends: 366, posts: 14, followers: "2k" },
        { id: 29, name: "Tania Rahman", email: "tania@gmail.com", friends: 306, posts: 12, followers: "5k" },
        { id: 30, name: "Fahim Shariar", email: "fahim@gmail.com", friends: 374, posts: 11, followers: "7k" },
        { id: 31, name: "Ayesha Akter", email: "ayesha@gmail.com", friends: 218, posts: 23, followers: "6k" },
        { id: 32, name: "Maruf Hossain", email: "maruf@gmail.com", friends: 351, posts: 27, followers: "3k" },
        { id: 33, name: "Rumi Sultana", email: "rumi@gmail.com", friends: 345, posts: 20, followers: "4k" },
        { id: 34, name: "Nashit Khan", email: "nashit@gmail.com", friends: 290, posts: 31, followers: "2k" },
        { id: 35, name: "Sabila Noor", email: "sabila@gmail.com", friends: 366, posts: 19, followers: "8k" },
        { id: 36, name: "Farhan Rahim", email: "farhan@gmail.com", friends: 412, posts: 25, followers: "5k" },
        { id: 37, name: "Jannat Ferdous", email: "jannat@gmail.com", friends: 278, posts: 17, followers: "3k" },
        { id: 38, name: "Tawsif Alam", email: "tawsif@gmail.com", friends: 319, posts: 38, followers: "1k" },
        { id: 39, name: "Tamanna Rahman", email: "tamanna@gmail.com", friends: 248, posts: 22, followers: "7k" },
        { id: 40, name: "Shahed Karim", email: "shahed@gmail.com", friends: 400, posts: 35, followers: "9k" },
        { id: 41, name: "Reshma Islam", email: "reshma@gmail.com", friends: 384, posts: 13, followers: "2k" },
        { id: 42, name: "Adib Mahmud", email: "adib@gmail.com", friends: 312, posts: 30, followers: "4k" },
        { id: 43, name: "Shanto Rahman", email: "shanto@gmail.com", friends: 220, posts: 26, followers: "5k" },
        { id: 44, name: "Sinthia Afroz", email: "sinthia@gmail.com", friends: 269, posts: 18, followers: "3k" },
        { id: 45, name: "Borno Aziz", email: "borno@gmail.com", friends: 294, posts: 39, followers: "6k" },
        { id: 46, name: "Noman Khan", email: "noman@gmail.com", friends: 390, posts: 24, followers: "4k" },
        { id: 47, name: "Orpa Jahan", email: "orpa@gmail.com", friends: 276, posts: 16, followers: "5k" },
        { id: 48, name: "Habib Reza", email: "habib@gmail.com", friends: 388, posts: 12, followers: "7k" }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const friendsPerPage = 8;
    const totalPages = friends.length / friendsPerPage;

    const low = (currentPage * friendsPerPage) - friendsPerPage;
    const high = currentPage * friendsPerPage;


    return (
        <div className="mb-[45px]">
            <div className="mt-8">
                <ProfileHeader />
            </div>

            <div className="mt-[62px]">
                <p className="text-[#AFB0C0] text-sm font-['Poppins'] mb-1">BROWSE ABM SHAWON</p>
                <h3 className="text-[#24234B] text-2xl font-['Poppins'] font-medium">Friends 48</h3>
            </div>

            <div className="mt-10 relative w-[717px]">
                <input className="text-[15px] font-['Poppins'] placeholder:text-[#D9D9D9] w-[717px] h-12 py-[12.5px] pl-[15px] outline-none border border-[#D9D9D9] rounded-[13px]" type="text" placeholder="Search Friends" />

                <div className="w-[84px] h-12 bg-[#23D2E2] rounded-[10px] flex justify-center items-center absolute top-0 right-0">
                    <SearchIcon2 />
                </div>
            </div>

            <div className="max-w-[1185px] flex flex-wrap gap-4 mt-[30px]">
                {
                    friends.slice(low, high).map(friend => <Friend key={friend.id} name={friend.name} email={friend.email} posts={friend.posts} friends={friend.friends} followers={friend.followers}/>)
                }
            </div>

            <div className="flex items-center justify-end mt-[37px] gap-[37px]">
                <button 
                    disabled={currentPage === 1} 
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    className={`${currentPage === 1 ? "" : "cursor-pointer"}`}
                >
                    <LeftArrowIcon />
                </button>
                <div className="flex gap-5">
                    {Array(totalPages).fill(1).map((_, idx) => (
                        <span
                            key={idx}
                            onClick={() => setCurrentPage(idx + 1)}
                            className={`text-[#3E3F5E] text-sm font-['Poppins'] font-medium ${idx + 1 === currentPage ? "text-[#23D2E2]" : ""} cursor-pointer`}
                        >{(idx + 1) > 0 && (idx + 1) < 10 ? 0 : ""}{idx + 1}</span>
                    ))}
                </div>
                <button 
                    disabled={currentPage === totalPages} 
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    className={`${currentPage === totalPages ? "" : "cursor-pointer"}`}
                >
                    <RightArrowIcon />
                </button>
            </div>
        </div>
    );
};

export default FriendsPage;