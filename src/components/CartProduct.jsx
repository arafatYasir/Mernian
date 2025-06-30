import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import TrashIcon2 from "../icons/TrashIcon2";

const CartProduct = ({name, type, user, quantity, price}) => {
    return (
        <div className="bg-white w-[884px] h-[101px] rounded-[15px] px-[28px] py-[20.5px] flex items-center justify-between">
            {/* Product Preview */}
            <div className="flex items-center gap-[22px]">
                <div>
                    <img src="/cart-product-image.png" alt="Product Preview" />
                </div>
                <div>
                    <p className="text-[#45437F] text-sm font-['Poppins'] font-medium">{name}</p>
                    <p className="text-[13px] font-['Poppins'] font-medium">{type}</p>
                    <p className="text-[12px] font-['Poppins']">{user}</p>
                </div>
            </div>

            {/* Quantity */}
            <div className="w-[96px] h-12 border border-[#D9D9D9] rounded-[15px] flex items-center justify-center relative">
                <span className="text-[#45437F] text-[17px] font-['Poppins'] font-medium">{quantity}</span>

                <div className="text-[#3E3F5E] flex flex-col gap-4 absolute top-0 right-[13px] cursor-pointer">
                    <FaAngleUp />
                    <FaAngleDown />
                </div>
            </div>

            {/* Price */}
            <p className="text-[17px] font-['Poppins'] font-medium">
                <span className="text-[#23D2E2]">$</span>
                <span className="ml-1">{price}</span>
            </p>

            {/* Delete */}
            <div className="bg-[#EA5050] p-[8.5px] rounded-full cursor-pointer">
                <TrashIcon2 />
            </div>
        </div>
    );
};

export default CartProduct;