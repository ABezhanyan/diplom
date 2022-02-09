// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import "./Wip.css";

// import required modules
import {EffectCreative, Pagination} from "swiper";

export default function Wip() {
    return (
        <div className="General">
            <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ["-20%", 0, -1],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                pagination={true}
                modules={[EffectCreative, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><button className="button_slide1">ADD TO CART</button></SwiperSlide>
                <SwiperSlide><button className="button_slide1">ADD TO CART</button></SwiperSlide>
                <SwiperSlide><button className="button_slide1">ADD TO CART</button></SwiperSlide>
            </Swiper>
        </div>
    );
}

