import classes from "./HeaderM.module.scss";
import "./HeaderM.css"
import Logo from "./Logo/Logo"
import NavBar from "./NavBar/NavBar"
import $ from "jquery";


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


const HeaderM = () => {
    return (
        <>
            <header>
                <div className={classes.ShopFoodHeader}>
                    <Logo />
                    <NavBar />
                </div>
            </header>
        </>
    )

}

export default HeaderM;