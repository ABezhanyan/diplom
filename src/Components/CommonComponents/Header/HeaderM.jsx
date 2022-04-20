import classes from "./HeaderM.module.scss";
import "./HeaderM.css"
import Logo from "./Logo/Logo"
import NavBar from "./NavBar/NavBar"
import $ from "jquery";


$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('header').addClass("sticky");
        $('img.img').addClass("sticky");
        $('#menu_login').attr('id', "menu_login_sticky");
        $('img.burger_login').addClass("sticky");
        $('li.menu-li').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
        $('img.img').removeClass("sticky");
        $("#menu_login_sticky").attr('id', "menu_login");
        $('img.burger_login').removeClass("sticky");
        $('li.menu-li').removeClass("sticky");
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