import classes from "./HeaderShop.module.css";
import "./HeaderShop.css"
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";
import Hero from "./Header/Hero";
import Wip from "./Swiper/Wip";
import Content from "./Content/Content";
import $ from "jquery";
import {NavLink} from "react-router-dom";

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('header').addClass("sticky");
        $('img.img').addClass("sticky");
        $('div.nav').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
        $('img.img').removeClass("sticky");
        $('div.nav').removeClass("sticky");
    }
});


const HeaderShop = () => {
    return (
        <>
            <header>
                <div className={classes.ShopFoodHeader}>
                    <Logo />
                    <NavBar />
                </div>
            </header>
            <content>
                <div className={classes.ShopFood}>
                    <Content />
                    <Wip />
                </div>
            </content>
        </>
    )

}

export default HeaderShop;