import { useState } from "react";
import Product from "../components/Product";
import RightArrowIcon from "../icons/RightArrowIcon";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import { FaStar } from "react-icons/fa";
import SearchIcon2 from "../icons/SearchIcon2"
import Pagination from "../components/Pagination";

const ProductsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const products = [
        { id: 1, name: "Intel Pentium G6400 10th Gen Special Deal PC", type: "PC", price: 12 },
        { id: 2, name: "HP Pavilion 15 Core i5 12th Gen Everyday Laptop", type: "Laptop", price: 38 },
        { id: 3, name: "AMD Ryzen 5 5600G Budget Gaming Desktop", type: "PC", price: 18 },
        { id: 4, name: "ASUS TUF VG249Q1A 23.8 Inch Gaming Monitor", type: "Monitor", price: 27 },
        { id: 5, name: "Logitech MK270R Wireless Keyboard Mouse Combo", type: "Accessory", price: 8 },
        { id: 6, name: "Canon EOS 3000D DSLR  with 18-55mm Lens", type: "Camera", price: 46 },
        { id: 7, name: "TP-Link Archer AX23 Dual Band WiFi 6 Router", type: "Networking", price: 11 },
        { id: 8, name: "MSI A520M-A PRO AMD AM4 ATX Motherboard", type: "Component", price: 9 },
        { id: 9, name: "APC Back-UPS 650VA Power Backup for PC", type: "UPS", price: 19 },
        { id: 10, name: "Samsung Galaxy Tab A8 10.5\" Wi-Fi Android Tablet", type: "Tablet", price: 25 },
        { id: 11, name: "Dahua 2MP Indoor IR Camera for Home Use", type: "Security", price: 6 },
        { id: 12, name: "WALTON 1KVA Offline UPS with Automatic Voltage", type: "UPS", price: 13 },
        { id: 13, name: "ADATA 8GB DDR4 3200MHz Desktop Memory Stick", type: "Component", price: 7 },
        { id: 14, name: "Gigabyte RTX 4060 WINDFORCE 8GB GPU Card", type: "Component", price: 79 },
        { id: 15, name: "ZKTeco MB2000 Time and Access Control", type: "Office Equipment", price: 36 },
        { id: 16, name: "Asus ROG Strix G15 AMD Ryzen 7 Gaming Laptop", type: "Laptop", price: 58 },
        { id: 17, name: "Sony Alpha ZV-E10 Vlogging Camera", type: "Camera", price: 63 },
        { id: 18, name: "Microsoft Office 2021 Home", type: "Software", price: 29 },
        { id: 19, name: "BOYA BY-M1 Microphone for Mobile & DSLR", type: "Accessory", price: 3 },
        { id: 20, name: "NZXT H510 Mid Tower Case with Tempered Glass", type: "Component", price: 16 },
        { id: 21, name: "Xiaomi Mi Portable Bluetooth Speaker", type: "Gadget", price: 9 },
        { id: 22, name: "Logitech G102 Light Sync RGB Gaming Mouse", type: "Gaming", price: 6 },
        { id: 23, name: "ASUS VG278QR 165Hz Full HD 27\" Gaming Monitor", type: "Monitor", price: 34 },
        { id: 24, name: "Redragon K552 Kumara RGB Gaming Keyboard", type: "Gaming", price: 10 },
        { id: 25, name: "HP M22f 21.5 Inch Full HD IPS Borderless Monitor", type: "Monitor", price: 17 },
        { id: 26, name: "Dell Vostro 3520 Intel Core i3 12th Gen Laptop", type: "Laptop", price: 31 },
        { id: 27, name: "Thermaltake 550W Smart RGB Power Supply Unit", type: "Component", price: 12 },
        { id: 28, name: "Xiaomi Mi Smart Band 8 Fitness Tracker Watch", type: "Gadget", price: 5 },
        { id: 29, name: "HP ProOne 240 G9 Intel Core i5 All-in-One PC", type: "PC", price: 42 },
        { id: 30, name: "Brother HL-L2320D Mono Laser Printer with Duplex", type: "Office Equipment", price: 22 },
        { id: 31, name: "TP-Link TL-SF1008D 8-Port 10/100 Mbps Switch", type: "Networking", price: 6 },
        { id: 32, name: "Kaspersky Internet Security Key", type: "Software", price: 4 },
        { id: 33, name: "Gigabyte DS3H Micro ATX Motherboard AM4", type: "Component", price: 14 },
        { id: 34, name: "JBL Tune 510BT Wireless On-Ear Headphones Black", type: "Gadget", price: 11 },
        { id: 35, name: "Canon PIXMA G3010 All-in-One Ink Tank Wireless", type: "Office Equipment", price: 28 },
        { id: 36, name: "A4TECH Bloody V8M Gaming Mouse", type: "Gaming", price: 7 },
        { id: 37, name: "Dahua XVR1B04H-I 1080P DVR Recorder", type: "Security", price: 19 },
        { id: 38, name: "ASUS Vivobook Go 14 AMD Ryzen 3 Thin Laptop", type: "Laptop", price: 27 },
        { id: 39, name: "Corsair Vengeance LPX 16GB DDR4 3200MHz RAM", type: "Component", price: 17 },
        { id: 40, name: "ASRock B450M AM4 Micro ATX Board", type: "Component", price: 15 },
        { id: 41, name: "Transcend 240GB SATA III SSD 2.5 Inch Internal", type: "Component", price: 9 },
        { id: 42, name: "Lenovo Tab M10 HD 2nd Gen WiFi Android Tablet", type: "Tablet", price: 20 },
        { id: 43, name: "Zebra GC420T Thermal Barcode Label Printer USB", type: "Office Equipment", price: 35 },
        { id: 44, name: "MSI Optix G241 24 Inch Full HD Gaming Monitor", type: "Monitor", price: 23 },
        { id: 45, name: "Redragon H510 Zeus Wired Gaming Headset with Mic", type: "Gaming", price: 10 },
        { id: 46, name: "Logitech C920 HD Pro Webcam for Video Calling", type: "Accessory", price: 12 },
        { id: 47, name: "Tenda AC10 AC1200 Dual Band Gigabit Wi-Fi Router", type: "Networking", price: 8 },
        { id: 48, name: "ViewSonic VA2405-H 24 Inch Full HD LED Monitor", type: "Monitor", price: 21 },
        { id: 49, name: "ADATA XPG SX6000 512GB M.2 PCIe Gen3x4 SSD", type: "Component", price: 24 },
        { id: 50, name: "Avita Pura Ryzen 5 3500U 8GB RAM Slim Laptop", type: "Laptop", price: 33 },
        { id: 51, name: "Corsair K55 RGB Gaming Keyboard", type: "Gaming", price: 13 },
        { id: 52, name: "ESET NOD32 Antivirus 1 User 1 Year License Key", type: "Software", price: 5 },
        { id: 53, name: "ZKTeco F18 Fingerprint Access Control Device", type: "Security", price: 30 },
        { id: 54, name: "ASUS Prime A320M-K AMD AM4 Micro ATX Board", type: "Component", price: 10 },
        { id: 55, name: "Dell Inspiron 15 Core i7 12th Gen Business Laptop", type: "Laptop", price: 55 },
        { id: 56, name: "Micropack MP-752W Wireless Mouse", type: "Accessory", price: 4 },
        { id: 57, name: "Ugreen USB-C to HDMI 4K Adapter Cable 1.5M", type: "Accessory", price: 3 },
        { id: 58, name: "HP 15s Ryzen 3 5300U FHD Lightweight Laptop", type: "Laptop", price: 30 },
        { id: 59, name: "Microlab M-108BT 2.1 Bluetooth Speaker System", type: "Gadget", price: 14 },
        { id: 60, name: "Adata XPG Gammix D30 8GB DDR4 3200MHz RAM", type: "Component", price: 6 },
        { id: 61, name: "ZKTeco K40 Pro Biometric Fingerprint Attendance", type: "Office Equipment", price: 26 },
        { id: 62, name: "Acer Aspire C24 All-in-One Intel Core i3 PC", type: "PC", price: 39 },
        { id: 63, name: "Dahua 4MP Camera with IR Night Vision", type: "Security", price: 15 },
        { id: 64, name: "Fantech K511 Hunter PRO Backlit Gaming Keyboard", type: "Gaming", price: 6 },
        { id: 65, name: "Hikvision DS-7A04HGHI 4 Channel Turbo HD DVR", type: "Security", price: 13 },
        { id: 66, name: "Baseus GaN2 Pro 65W Fast Charging Adapter USB-C", type: "Accessory", price: 5 },
        { id: 67, name: "Asus ExpertBook B1 Core i5 11th Gen Laptop", type: "Laptop", price: 37 },
        { id: 68, name: "Havit H2016D Stereo Gaming Headset with Mic", type: "Gaming", price: 9 },
        { id: 69, name: "WD Blue 1TB 7200RPM Internal Hard Drive", type: "Component", price: 11 },
        { id: 70, name: "Zebex Z-3190 Barcode Scanner with USB", type: "Office Equipment", price: 18 },
        { id: 71, name: "Havit HV-MS1022 RGB Gaming Mouse with DPI", type: "Gaming", price: 4 },
        { id: 72, name: "HP LaserJet Pro M15a Monochrome Laser Printer", type: "Office Equipment", price: 32 },
    ];

    const productsPerPage = 9;
    const totalPages = products.length / productsPerPage;

    const low = (currentPage * productsPerPage) - productsPerPage;
    const high = currentPage * productsPerPage;


    return (
        <div className="w-[1185px] mb-[52px] mt-9">
            <div>
                <img src="/marketplace-banner.png" alt="Marketplace Banner" />
            </div>
            <div className="mt-[20px]">
                <p className="text-[#AFB0C0] text-sm font-['Poppins'] mb-1">BROWSE PRODUCTS</p>
                <h3 className="text-[#24234B] text-2xl font-['Poppins'] font-medium">Digital Items</h3>
            </div>

            {/* Search and Filters */}
            <div className="mt-[50px]">
                <div className="flex gap-3">
                    <div>
                        <input className="w-[300px] h-[45px] border border-[#D9D9D9] rounded-[15px] outline-none py-[9.5px] pl-[15px] text-[17px] font-medium font-['Poppins'] placeholder:text-[#D9D9D9]" type="text" placeholder="Search items" />
                    </div>
                    <button className="bg-[#23D2E2] w-[63px] h-[45px] flex items-center justify-center rounded-[15px] cursor-pointer">
                        <SearchIcon2 />
                    </button>
                </div>

                {/* Put the dropdown here as per my design */}
            </div>

            {/* Products & Sidebar */}
            <div className="flex justify-between mt-[50px]">
                {/* Sidebar */}
                <div className="w-[284px] h-[661px] bg-white rounded-[15px] px-[15px] py-[30px]">
                    {/* Categories */}
                    <div className="font-['Poppins'] text-sm">
                        <h4 className="font-bold">Categories</h4>

                        <div className="font-medium flex flex-col gap-[10px] mt-[13px]">
                            <p className="flex justify-between"><span className="text-[#AFB0C0]">All Categories</span> <span className="text-[#23D2E2]">1207</span></p>
                            <p className="flex justify-between"><span className="text-[#AFB0C0]">Psd Templates</span> <span className="text-[#23D2E2]">134</span></p>
                            <p className="flex justify-between"><span className="text-[#AFB0C0]">HTML Templates</span> <span className="text-[#23D2E2]">134</span></p>
                            <p className="flex justify-between"><span className="text-[#AFB0C0]">WP Templates</span> <span className="text-[#23D2E2]">134</span></p>
                            <p className="flex justify-between"><span className="text-[#AFB0C0]">Illustration</span> <span className="text-[#23D2E2]">134</span></p>
                            <p className="flex justify-between"><span className="text-[#AFB0C0]">Logos and badges</span> <span className="text-[#23D2E2]">134</span></p>
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="mt-[29px]">
                        <h4 className="text-sm font-['Poppins'] font-bold mb-[25px]">Price Range</h4>

                        <div className="text-sm">
                            <input className="w-[79px] h-12 border border-[#D9D9D9] rounded-[15px] px-[21px] py-[13.5px] placeholder:text-[#D9D9D9] outline-none" type="text" placeholder="From" />
                            <input className="w-[79px] h-12 border border-[#D9D9D9] rounded-[15px] px-[31px] py-[13.5px] placeholder:text-[#D9D9D9] outline-none ml-3" type="text" placeholder="To" />
                        </div>

                        <button className="text-white text-sm font-['Poppins'] font-bold px-[55.5px] py-[9.5px] bg-[#23D2E2] rounded-[11px] cursor-pointer mt-[25px]">Apply Price Filter</button>
                    </div>

                    {/* Reviews */}
                    <div className="mt-[19px]">
                        <h4 className="text-sm font-['Poppins'] font-bold mb-[22px]">Reviews</h4>
                        <h4 className="text-sm font-['Poppins'] flex justify-between"><span className="font-bold text-[#45437F]">All reviews</span> <span className="text-[#23D2E2]">1207</span></h4>

                        <div className="flex items-center justify-between mt-[10px]">
                            <div className="flex items-center gap-[11px]">
                                <div className="flex text-[#FCE730] gap-[3px] text-sm">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <span className="text-sm font-['Poppins'] font-medium text-[#3E3F5E]">4+</span>
                            </div>
                            <span className="text-sm font-['Poppins'] text-[#23D2E2]">1207</span>
                        </div>

                        <div className="flex items-center justify-between mt-[10px]">
                            <div className="flex items-center gap-[11px]">
                                <div className="flex text-[#FCE730] gap-[3px] text-sm">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <span className="text-sm font-['Poppins'] font-medium text-[#3E3F5E]">4+</span>
                            </div>
                            <span className="text-sm font-['Poppins'] text-[#23D2E2]">1207</span>
                        </div>

                        <div className="flex items-center justify-between mt-[10px]">
                            <div className="flex items-center gap-[11px]">
                                <div className="flex text-[#FCE730] gap-[3px] text-sm">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <span className="text-sm font-['Poppins'] font-medium text-[#3E3F5E]">4+</span>
                            </div>
                            <span className="text-sm font-['Poppins'] text-[#23D2E2]">1207</span>
                        </div>

                        <div className="flex items-center justify-between mt-[10px]">
                            <div className="flex items-center gap-[11px]">
                                <div className="flex text-[#FCE730] gap-[3px] text-sm">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <span className="text-sm font-['Poppins'] font-medium text-[#3E3F5E]">4+</span>
                            </div>
                            <span className="text-sm font-['Poppins'] text-[#23D2E2]">1207</span>
                        </div>
                    </div>
                </div>
                {/* Products */}
                <div className="max-w-[887px]">
                    <div className="flex flex-wrap gap-[20px]">
                        {
                            products.slice(low, high).map(p => <Product key={p.id} name={p.name} price={p.price} type={p.type} />)
                        }
                    </div>
                </div>
            </div>

            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
    );
};

export default ProductsPage;