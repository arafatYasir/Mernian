import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import BlueArrowIcon from "../icons/BlueArrowIcon";

const NextArrow = (props) => {
    const { style, onClick } = props;

    return (
        <div
            style={{
                ...style,
                width: "60px",
                height: "39px",
                padding: "7px 17.5px",
                borderRadius: "5px",
                display: "block",
                position: "absolute",
                background: "white",
                zIndex: 1,
                top: "-51px",
                left: "50%",
                transform: "translateX(-50%)",
                cursor: "pointer",
            }}
            onClick={onClick}
        >
            <BlueArrowIcon />
        </div>
    )
}

const PrevArrow = (props) => {
    const { style, onClick } = props;

    return (
        <div
            style={{
                ...style,
                width: "60px",
                height: "39px",
                padding: "7px 17.5px",
                borderRadius: "5px",
                display: "block",
                position: "absolute",
                background: "white",
                bottom: "-51px",
                left: "50%",
                zIndex: 1,
                transform: "translateX(-50%) rotate(180deg)",
                cursor: "pointer",
            }}
            onClick={onClick}
        >
            <BlueArrowIcon />
        </div>
    )
}


const Carousel = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    const miniSliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        dots: false,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const mainSliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        linear: true,
        dots: false,
        arrows: false,

    };

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    return (
        <div className="slider-container flex items-center gap-4">
            {/* Mini Slider */}
            <Slider
                {...miniSliderSettings}
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                className="w-[49px]"
            >
                <div>
                    <img className="w-[48px] h-[48px] object-cover" src="/product-1.jpg" alt="Product Image 1" />
                </div>
                <div>
                    <img className="w-[48px] h-[48px] object-cover" src="/product-2.jpg" alt="Product Image 2" />
                </div>
                <div>
                    <img className="w-[48px] h-[48px] object-cover" src="/product-3.jpg" alt="Product Image 3" />
                </div>
            </Slider>

            {/* Main Slider */}
            <Slider {...mainSliderSettings} asNavFor={nav2} ref={slider => (sliderRef1 = slider)} className="w-[830px]" >
                <div>
                    <img className="w-[830px] h-[560px] object-cover rounded-[15px]" src="/product-1.jpg" alt="Product Image 1" />
                </div>
                <div>
                    <img className="w-[830px] h-[560px] object-cover rounded-[15px]" src="/product-2.jpg" alt="Product Image 2" />
                </div>
                <div>
                    <img className="w-[830px] h-[560px] object-cover rounded-[15px]" src="/product-3.jpg" alt="Product Image 3" />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;