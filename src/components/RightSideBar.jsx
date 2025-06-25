const RightSideBar = () => {
    const friends = Array(10).fill(1);
    return (
        <div className="w-20 h-dvh bg-white flex flex-col items-center gap-[10px] mt-[10px]">
            {
                friends.map((friend, idx) => (
                    <div 
                        key={idx}
                        className="w-10 h-10 bg-[#4E4AC8] rounded-full border-[#D9D9D9] border-[3px]"
                    ></div>
                ))
            }
        </div>
    );
};

export default RightSideBar;