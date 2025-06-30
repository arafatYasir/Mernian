import CartProduct from "../components/CartProduct";

const CartPage = () => {
    const products = Array(3).fill(1);
    return (
        <div className="w-[1185px] mt-9">
            <div>
                <img src="/marketplace-banner.png" alt="Marketplace Banner Image" />
            </div>

            <div className="mt-[23px]">
                <p className="text-[#AFB0C0] text-sm font-['Poppins'] mb-1">BROWSE YOUR</p>
                <h3 className="text-[#24234B] text-2xl font-['Poppins'] font-medium">Shopping cart 3</h3>
            </div>

            <div className="uppercase flex gap-[362px] text-[15px] font-['Poppins'] font-medium mt-[13px] pl-[28px]">
                <p>Item</p>
                <div className="flex gap-[150px]">
                    <p>Quantity</p>
                    <p>Price</p>
                </div>
            </div>

            {/* Products & Pricing */}
            <div className="flex items-start justify-between mt-[10px]">
                <div>
                    {/* Products */}
                    <div className="flex flex-col gap-[23px]">
                        {products.map((_, i) => (
                            <CartProduct key={i} name="Twitch stream ui pack" type="Stream packs" user="ABM shawon" quantity={1} price="12.00" />
                        ))}
                    </div>

                    {/* Coupon Code */}
                    <div className="bg-white w-[884px] h-[101px] rounded-[15px] px-[28px] py-[24.5px] flex items-center justify-between mt-[13px]">
                        <p className="text-[17px] font-['Poppins'] font-medium text-[#AFB0C0] max-w-[435px]">If you have promotional or a discount code, please
                            enter it right here to redeem it.</p>

                        <div>
                            <input className="border border-[#D9D9D9] rounded-[15px] w-[217px] py-[14px] px-[13px] outline-none text-[13px] font-['Poppins'] font-medium placeholder:text-[#AFB0C0]" type="text" placeholder="Promo code" />
                            <button className="text-[12px] text-white font-['Poppins'] font-medium p-[15px] bg-[#615DFA] rounded-[15px] cursor-pointer ml-[13px]">Redeem Code</button>
                        </div>
                    </div>
                </div>

                {/* Pricing */}
                <div className="bg-white w-[288px] h-[480px] rounded-[15px] py-[29px] px-[26px]">
                    <h4 className="text-[17px] font-['Poppins'] font-medium">Order totals</h4>

                    <p className="text-[49px] font-['Poppins'] font-medium text-center mt-[15px]">
                        <span className="text-[#23D2E2]">$</span>
                        <span>39.00</span>
                    </p>

                    <div className="text-[12px] font-['Poppins'] font-medium mt-[39px] flex flex-col gap-[11px]">
                        <p className="flex justify-between">
                            <span className="text-[#AFB0C0]">Cart(3)</span>
                            <span>
                                <span className="text-[#23D2E2]">$</span>
                                <span>44.00</span>
                            </span>
                        </p>
                        <p className="flex justify-between">
                            <span className="text-[#AFB0C0]">Code</span>
                            <span>
                                <span>-</span>
                                <span className="text-[#23D2E2]">$</span>
                                <span>15.00</span>
                            </span>
                        </p>
                        <p className="flex justify-between">
                            <span className="text-[#AFB0C0]">Total</span>
                            <span>
                                <span className="text-[#23D2E2]">$</span>
                                <span>39.00</span>
                            </span>
                        </p>
                    </div>

                    <div className="mt-[53px]">
                        <button className="px-12 py-[15px] bg-[#23D2E2] rounded-[15px] text-[12px] font-['Poppins'] font-medium text-white cursor-pointer">Proccecd to checkout</button>

                        <button className="px-[77.5px] py-[15px] rounded-[15px] text-[12px] font-['Poppins'] font-medium text-[#AFB0C0] cursor-pointer border border-[#D9D9D9] mt-[10px]">Update cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;