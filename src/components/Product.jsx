import { GoDotFill } from "react-icons/go";
import { Link } from "react-router";

const Product = ({name, type, price}) => {
    return (
        <Link to="/product-details" className="w-[281px] h-[380px] bg-white rounded-[15px] block">
            <div className="relative">
                <img src="/product-image.png" alt="Product Image" />
                <span style={{boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.10)"}} className="bg-white w-[70px] h-[30px] flex items-center justify-center rounded-3xl absolute right-[14px] top-[165px] text-sm text-[#615DFA] font-['Poppins'] font-bold">${price}</span>
            </div>
            <div className="pl-[30px] mt-[26px]">
                <h4 className="max-w-[219px] font-['Poppins'] font-bold">{name}</h4>
                <p className="flex items-center gap-[5px] mt-[9px]">
                    <GoDotFill className="text-[#23D2E2]" />
                    <span className="text-sm font-['Poppins'] font-light">{type}</span>
                </p>
                <Link to="/product-details" className="text-[#615DFA] text-[13px] font-light font-['Poppins'] underline inline-block mt-[13px]">Full Screen View</Link>
            </div>

            <div className="text-[13px] font-['Poppins'] font-semibold text-white mt-[28px]">
                <button className="bg-[#615DFA] w-[50%] py-[8.5px] rounded-bl-[15px] cursor-pointer">Add to Cart</button>
                <button className="bg-[#23D2E2] w-[50%] py-[8.5px] rounded-br-[15px] cursor-pointer">Wishlist</button>
            </div>
        </Link>
    );
};

export default Product;