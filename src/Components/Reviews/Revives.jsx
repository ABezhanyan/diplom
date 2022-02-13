import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import classes from "./Revives.modules.css";

// import required modules
import { Pagination } from "swiper";

export default function Revives() {
    return (
        <div className={classes.gen}>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}

                modules={[Pagination]}
                className={classes.SwiperRev}
            >
                <SwiperSlide className={classes.RevS}>Slide 1</SwiperSlide>
                <SwiperSlide className={classes.RevS}>Slide 2</SwiperSlide>
                <SwiperSlide className={classes.RevS}>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    );
}