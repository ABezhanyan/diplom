import classes from "./HeaderMain.module.css";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";
import Hero from "./Header/Hero";
import Wip from "./Swiper/Wip";
import Content from "./Content/Content";

const HeaderMain = () => {
    return (
        <div className={classes.ShopFood}>
            <NavBar />
            <Logo />
            <Hero />
            <Content />
        </div>
    )

}

export default HeaderMain;