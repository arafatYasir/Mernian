import { FaStar } from "react-icons/fa";
import BlueArrowIcon from "../icons/BlueArrowIcon";

const ProductDetails = () => {
    return (
        <div className="w-[1185px] mt-9 font-['Poppins'] mb-20">
            <div>
                <img src="/marketplace-banner.png" alt="Marketplace Banner" />
            </div>

            <div className="mt-[23px]">
                <p className="text-[#AFB0C0] text-sm mb-1">BROWSE PRODUCTS</p>
                <h3 className="text-[#24234B] text-2xl font-medium">Digital Items</h3>
            </div>

            {/* Carousel & Pricing */}
            <div className="flex justify-between mt-[23px] gap-3">
                {/* Carousel */}
                <div className="flex items-center gap-[10px]">
                    <div className="flex items-center flex-col gap-1.5">
                        <button className="px-[19px] py-[8.5px] bg-[#FEFEFE] rounded-[5px] cursor-pointer ">
                            <BlueArrowIcon />
                        </button>
                        <div className="space-y-1.5">
                            <img src="/carousel-preview.png" alt="Carousel Preview Image" />
                            <img src="/carousel-preview.png" alt="Carousel Preview Image" />
                            <img src="/carousel-preview.png" alt="Carousel Preview Image" />
                        </div>
                        <button className="px-[19px] py-[8.5px] bg-[#FEFEFE] rounded-[5px] cursor-pointer rotate-180">
                            <BlueArrowIcon />
                        </button>
                    </div>
                    <div>
                        <img className="w-[830px]" src="/carousel-image.png" alt="Carousel Image" />
                    </div>
                </div>

                {/* Pricing */}
                <div className="bg-white rounded-[15px] w-[284px] h-[296px] px-[27.5px] py-[30px]">
                    <p className="text-[49px] font-medium text-center">
                        <span className="text-[#23D2E2]">$</span>
                        <span>39.00</span>
                    </p>

                    <div className="flex items-center justify-between mt-[26px] relative after:content-[''] after:absolute after:w-[1px] after:h-[51px] after:bg-[#AFB0C0] after:left-1/2 after:-translate-x-1/2">
                        <p className="flex flex-col items-center">
                            <span className="text-2xl text-[#181828] font-semibold">1320</span>
                            <span className="text-sm text-[#AFB0C0] font-medium">Sales</span>
                        </p>
                        <p className="flex flex-col items-center">
                            <span className="text-2xl text-[#181828] font-semibold">4.2/5</span>
                            <span className="text-[11px] text-[#FCE730] font-medium flex gap-[3px] mt-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                        </p>
                    </div>

                    <button className="text-white text-base font-medium px-[45px] py-[12px] rounded-[10px] bg-[#23D2E2] cursor-pointer mt-[35px]">Add to your cart</button>
                </div>
            </div>

            {/* Description, Comments, Reviews */}
            <div className="max-w-[821px] h-[948px] mt-20 bg-white rounded-[15px] relative left-[70px]">
                <div className="flex border-b border-[#D9D9D9]">
                    <button className="w-1/3 text-center py-[19.5px] rounded-tl-[15px] bg-[#7A77FD] text-white text-[12px] font-bold cursor-pointer">Description</button>
                    <button className="w-1/3 text-center py-[19.5px] text-[12px] font-bold cursor-pointer">Comments</button>
                    <button className="w-1/3 text-center py-[19.5px] text-[12px] font-bold cursor-pointer">Review</button>
                </div>

                <div className="mt-15 px-5">
                    <h4 className="text-[#181828] text-xl font-bold">The Best eSports and Gaming Magazine Template!</h4>

                    <p className="text-base text-[#474747] font-medium mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>

                    <p className="text-base text-[#474747] font-medium mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="mt-10 px-5">
                    <h4 className="text-[#181828] text-xl font-bold">356+ HTML Elements Library included</h4>

                    <p className="text-base text-[#474747] font-medium mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;