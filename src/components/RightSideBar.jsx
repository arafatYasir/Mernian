const RightSideBar = () => {
    const friends = Array(10).fill(1);
    return (
        <div className="w-20 min-h-screen bg-white">
            <div className="flex flex-col items-center gap-[10px] mt-[10px]">
                {
                    friends.map((friend, idx) => (
                        <img
                            key={idx}
                            className="w-10 h-10 rounded-full border-[#D9D9D9] border-[3px]"
                            src="/friend.png"
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default RightSideBar;