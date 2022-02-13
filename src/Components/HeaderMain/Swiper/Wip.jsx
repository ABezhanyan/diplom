// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import Sl from "../img/slide.jpg"

import classes from "./Wip.module.css";

// import required modules
import {EffectCreative, Pagination} from "swiper";

export default function Wip() {
    return (
        <div className={classes.gen}>
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
                className={classes.mySwiper}
            >
                <SwiperSlide className={classes.sv}>
                    <div className={classes.Sl}>
                        <img className={classes.img} src={Sl}/>
                        <button className={classes.button_slide1}>ADD TO CART</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={classes.sv}>
                    <div className={classes.Sl}>
                        <img className={classes.img} src={Sl}/>
                        <button className={classes.button_slide1}>ADD TO CART</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={classes.sv}>
                    <div className={classes.Sl}>
                        <img className={classes.img} src={Sl}/>
                        <button className={classes.button_slide1}>ADD TO CART</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

