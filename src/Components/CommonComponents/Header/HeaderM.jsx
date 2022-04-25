/* eslint-disable jsx-a11y/alt-text */
import classes from "./HeaderM.module.scss";
import "./HeaderM.css"
import Logo from "./Logo/Logo"

import $ from "jquery";
import {NavLink} from "react-router-dom";
import { useState } from "react";
import burger from "./img/burger.svg"
import login from './img/login.svg'
import "../Header/NavBar/NavBar.css";
import "../Header/NavBar/NavBarOne.scss";
import Login from "../Login/Login";
import market from "./img/market.svg"


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


const HeaderM = (props) => {

    $(document).ready(function($) {
        $('.popup-open').click(function() {
                $('.popup-fade').fadeIn();
                return false;
        });	
        
        $('.popup-close').click(function() {
                $(this).parents('.popup-fade').fadeOut();
                return false;
        });		

        $(document).keydown(function(e) {
                if (e.keyCode === 27) {
                        e.stopPropagation();
                        $('.popup-fade').fadeOut();
                }
        });
        
        $('.popup-fade').click(function(e) {
                if ($(e.target).closest('.popup').length === 0) {
                        $(this).fadeOut();					
                }
        });	
});

const [switchTOggled, setSwitchTOggled] = useState(false);

const ToggleSwitch = () => {
        switchTOggled ? setSwitchTOggled(false) : setSwitchTOggled(true);
};
    
    return (
        <>
            <header>
                <div className={classes.ShopFoodHeader}>
                    <Logo />
                    <div>
               
                <div onClick={ToggleSwitch} className="burger_login_main" >
                        <img className="burger_login" alt="" src={burger}/>
                </div>
                
                
               <div className="menu_main">
               <ul className={switchTOggled ? "menu active" : "menu"} id="menu_login" >
                <li className="menu-li">
                <NavLink onClick={ToggleSwitch} href="#" to="/" className="NavBar btn">HOME</NavLink>
                </li>
                <li className="menu-li">
                <NavLink onClick={ToggleSwitch} href="#" to="/shop" className="NavBar btn">SHOP</NavLink>
                </li>
                <li className="menu-li">
                <NavLink onClick={ToggleSwitch} href="#" to="/about" className="NavBar btn">ABOUT</NavLink>
                </li>
                <li className="menu-li">
                <NavLink onClick={ToggleSwitch} href="#" to="/contact" className="NavBar btn">CONTACT</NavLink>
                </li>
                <li className="menu-li">
                <button className="popup-open" href="#"><img className="myLinkModal_img" alt="login" src={login}/>
                </button>
                </li>
                <li onClick={props.onClickCart} className="menu-li cu-p">
                    <img src={market} alt="market" className="myLinkModal_img"/>
                    {/* <span className="market_price">1205 руб.</span> */}
                </li>
                </ul> 
               </div>
        
      

                <div className="popup-fade">
                        <div className="popup">
                                        <Login />
                        </div>
                
                </div>
              
                
        </div>
                </div>
            </header>
        </>
    )

}

export default HeaderM;