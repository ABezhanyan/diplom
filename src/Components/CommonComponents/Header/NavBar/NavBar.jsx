import {NavLink} from "react-router-dom";
import "./NavBarOne.scss";
import "./NavBar.css"
import Login from "../../Login/Login";
import login from '../img/login.svg'
import { useState } from "react";
import burger from "../img/burger.svg"
import $ from "jquery";


const NavBar = (props) => {


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
                </ul> 
               </div>
        
      


                <div className="popup-fade">
                        <div className="popup">
                                        <Login />
                        </div>
                
                </div>
              
                
        </div>
           
        
    )

}

// {/*  */}

export default NavBar;