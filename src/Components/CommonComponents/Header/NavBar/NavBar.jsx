import {NavLink} from "react-router-dom";
import "./NavBarOne.scss";
import "./NavBar.css"
import Login from "../../Login/Login";
import login from '../img/login.svg'
import $ from "jquery";


$(document).ready(function() {
	$('button.myLinkModal').click( function(event){
		event.preventDefault();
		$('#myOverlay').fadeIn(297,	function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, "linear");
      
		});
	});

	$('#myModal__close, #myOverlay').click( function(){
		$('#myModal').animate({opacity: 0}, 198,
      function(){
        $(this).css('display', 'none');
        $('#myOverlay').fadeOut(297);
		});
	});
});




const NavBar = () => {
    return (
        <div className="nav">
                <NavLink href="#" to="/" className="NavBar btn">
                        HOME
                </NavLink>
                <NavLink href="#" to="/shop" className="NavBar btn">
                        SHOP
                </NavLink>
                <NavLink href="#" to="/about" className="NavBar btn">
                        ABOUT
                </NavLink>
                <NavLink href="#" to="/contact" className="NavBar btn">
                        CONTACT
                </NavLink>
                <div>
                <button class="myLinkModal" href="#"><img className="myLinkModal_img" alt="login" src={login}/></button>
                <div id="myModal">
                                <Login />
                        <div id="myModal__close" class="close"></div>
                </div>
                <div id="myOverlay"></div>
            
      </div>
        </div>
    )

}

export default NavBar;