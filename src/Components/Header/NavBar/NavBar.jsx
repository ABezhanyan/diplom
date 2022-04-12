import {NavLink} from "react-router-dom";
import "./NavBar.css"


const NavBar = () => {
    return (
        <div className="nav">
            <NavLink to="/" className="NavBar btn">
                    HOME
            </NavLink>
            <NavLink to="/shop" className="NavBar btn">
                    SHOP
            </NavLink>
            <NavLink to="/about" className="NavBar btn">
                    ABOUT
            </NavLink>
            <NavLink to="/gallery" className="NavBar btn">
                    GALLERY
            </NavLink>
            <NavLink to="/contact" className="NavBar_last btn">
                    CONTACT
            </NavLink>
        </div>
    )

}

export default NavBar;