import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <div className={classes.nav}>
            <NavLink to="/" className={`${classes.NavBar} ${classes.btn}`}>
                    HOME
            </NavLink>
            <NavLink to="/shop" className={`${classes.NavBar} ${classes.btn}`}>
                    SHOP
            </NavLink>
            <NavLink to="/about" className={`${classes.NavBar} ${classes.btn}`}>
                    ABOUT
            </NavLink>
            <NavLink to="/gallery" className={`${classes.NavBar} ${classes.btn}`}>
                    GALLERY
            </NavLink>
            <NavLink to="/contact" className={`${classes.NavBar} ${classes.btn}`}>
                    CONTACT
            </NavLink>
        </div>
    )

}

export default NavBar;