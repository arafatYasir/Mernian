import LeftArrowIcon from '../icons/LeftArrowIcon';
import RightArrowIcon from '../icons/RightArrowIcon';

const Pagination = ({currentPage, setCurrentPage, totalPages}) => {
    return (
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
    );
};

export default Pagination;