import { GoDotFill } from "react-icons/go";

const CheckoutPage = () => {
    return (
        <div className="max-w-[1185px] mt-9 mb-20">
            <div>
                <img src="/marketplace-banner.png" alt="Marketplace Banner Image" />
            </div>

            <div className="mt-[23px]">
                <p className="text-[#AFB0C0] text-sm font-['Poppins'] mb-1">BROWSE YOUR</p>
                <h3 className="text-[#242n34B] text-2xl font-['Poppins'] font-medium">Checkout</h3>
            </div>

            <div className="flex justify-between mt-[25px]">
                {/* Billing Details */}
                <div className="bg-white rounded-[15px] w-[784px] h-[561px] px-8 pt-8 pb-[30px]">
                    <h4 className="text-lg font-['Poppins'] font-medium">Billing Details</h4>

                    {/* Inputs */}
                    <div className="flex flex-col gap-[22px] mt-[32px]">
                        <div className="flex justify-between">
                            <input className="w-[354px] h-12 border border-[#AFB0C0] rounded-[15px] py-[13.5px] px-[22px] outline-none placeholder:text-[#AFB0C0]" type="text" placeholder="First name" />

                            <input className="w-[354px] h-12 border border-[#AFB0C0] rounded-[15px] py-[13.5px] px-[22px] outline-none placeholder:text-[#AFB0C0]" type="text" placeholder="Last name" />
                        </div>

                        <div className="flex justify-between">
                            <input className="w-[354px] h-12 border border-[#AFB0C0] rounded-[15px] py-[13.5px] px-[22px] outline-none placeholder:text-[#AFB0C0]" type="email" placeholder="Email" />
                            <input className="w-[354px] h-12 border border-[#AFB0C0] rounded-[15px] py-[13.5px] px-[22px] outline-none placeholder:text-[#AFB0C0]" type="text" placeholder="Phone number" />
                        </div>

                        <div className="flex justify-between">
                            <input className="w-full h-12 border border-[#AFB0C0] rounded-[15px] py-[13.5px] px-[22px] outline-none placeholder:text-[#AFB0C0]" type="text" placeholder="Full address" />
                        </div>

                        <div className="flex justify-between">
                            <input className="w-[354px] h-12 border border-[#AFB0C0] rounded-[15px] py-[13.5px] px-[22px] outline-none placeholder:text-[#AFB0C0]" type="text" placeholder="New York" />
                            <input className="w-[354px] h-12 border border-[#AFB0C0] rounded-[15px] py-[13.5px] px-[22px] outline-none placeholder:text-[#AFB0C0]" type="text" placeholder="ZIP Code" />
                        </div>
                        <div>
                            <textarea
                                className="w-full h-[160px] border border-[#AFB0C0] rounded-[15px] outline-none placeholder:text-[#AFB0C0] py-[14.5px] px-[22px] resize-none"
                                placeholder="Write any additional details here..."
                            />
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-[15px] w-[384px] h-[743px] px-[26px] py-[27px]">
                    <h4 className="text-lg font-['Poppins'] font-medium">Order Summary</h4>

                    {/* Products List */}
                    <div className="font-['Poppins'] font-medium mt-[33px] flex flex-col gap-[20px] relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#AFB0C0] after:bottom-0 after:left-0 pb-[33px]">
                        <p className="flex justify-between">
                            <span className="text-[#45437F] text-sm">Twitch stream ui pack</span>
                            <span className="text-[12px]">
                                <span className="text-[#23D2E2]">$</span>
                                <span>44.00</span>
                            </span>
                        </p>
                        <p className="flex justify-between">
                            <span className="text-[#45437F] text-sm">Twitch stream ui pack</span>
                            <span className="text-[12px]">
                                <span className="text-[#23D2E2]">$</span>
                                <span>44.00</span>
                            </span>
                        </p>
                        <p className="flex justify-between">
                            <span className="text-[#45437F] text-sm">Twitch stream ui pack</span>
                            <span className="text-[12px]">
                                <span className="text-[#23D2E2]">$</span>
                                <span>44.00</span>
                            </span>
                        </p>
                        <p className="flex justify-between">
                            <span className="text-[#45437F] text-sm">Twitch stream ui pack</span>
                            <span className="text-[12px]">
                                <span className="text-[#23D2E2]">$</span>
                                <span>44.00</span>
                            </span>
                        </p>
                    </div>

                    <div className="text-[12px] font-['Poppins'] font-medium mt-[21px] flex flex-col gap-[11px] relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#AFB0C0] after:bottom-0 after:left-0 pb-[21px]">
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

                    <p className="text-[49px] font-['Poppins'] font-medium text-center mt-[11px] relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#AFB0C0] after:bottom-0 after:left-0 pb-[11px]">
                        <span className="text-[#23D2E2]">$</span>
                        <span>39.00</span>
                    </p>

                    {/* Payment Method */}
                    <div className="mt-[21px]">
                        <h4 className="text-lg font-['Poppins'] font-medium">Payment Method</h4>

                        <p className="flex items-center gap-1.5">
                            <GoDotFill className="text-[#23D2E2] text-2xl" />
                            <span className="text-[12px] font-semibold text-[#181828] font-['Poppins']">Paypal</span>
                        </p>

                        <p className="text-[11px] font-['Poppins'] text-[#AFB0C0] font-medium mt-2">Pay with your paypal balance or connected bank account
                            it’s quick and really secure.</p>
                        
                        <div className="flex items-center gap-1.5 mt-[11px]">
                            <div className="w-[14px] h-[14px] border border-[#AFB0C0] rounded-full cursor-pointer"></div>
                            <p className="text-[12px] font-semibold text-[#181828] font-['Poppins']">Credit or Debit card</p>
                        </div>

                        <div className="text-center mt-[33px]">
                            <button className="text-white text-[12px] font-['Poppins'] font-medium px-[62.5px] py-[15px] bg-[#23D2E2] rounded-[15px] cursor-pointer">Complete Order!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;