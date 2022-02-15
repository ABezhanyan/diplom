import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


import classes from "./Revives.module.css";
import ellipse from "./img/Ellipse.svg"

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function Revives() {
    return (
        <div className={classes.gen}>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation]}
                className={classes.mySwiper}
            >
                <SwiperSlide className={classes.RevS}>
                    <div className={classes.text}>REVIVES</div>
                    <div className={classes.text_two}>Posuere elementum morbi est tempor viverra dolor. Consectetur sagittis semper a tellus aliquam non sapien. Velit, ultricies potenti sed vestibulum pellentesque dui aliquet lacus. Ac natoque faucibus amet facilisi neque morbi eget ac. Sit faucibus congue nec ut. Enim enim augue adipiscing felis, augue maecenas viverra. Tortor nam integer sit potenti lacinia et, aliquam viverra. Feugiat pharetra, consectetur tellus et diam. Fringilla imperdiet</div>
                    <div className={classes.ellipse}>
                        <img className={classes.img} src={ellipse}/>
                        <div className={classes.name}>Claude Farmer{"\n"}
                        <div className={classes.post}>Programmer</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={classes.RevS}>
                    <div className={classes.text}>REVIVES</div>
                    <div className={classes.text_two}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className={classes.ellipse}>
                        <img className={classes.img} src={ellipse}/>
                        <div className={classes.name}>Claude Farmer{"\n"}
                            <div className={classes.post}>Programmer</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={classes.RevS}>
                    <div className={classes.text}>REVIVES</div>
                    <div className={classes.text_two}>Nunc pulvinar sapien et ligula ullamcorper. Id faucibus nisl tincidunt eget nullam. Proin nibh nisl condimentum id venenatis a. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Orci porta non pulvinar neque. Mi in nulla posuere sollicitudin.</div>
                    <div className={classes.ellipse}>
                        <img className={classes.img} src={ellipse}/>
                        <div className={classes.name}>Claude Farmer{"\n"}
                            <div className={classes.post}>Programmer</div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}