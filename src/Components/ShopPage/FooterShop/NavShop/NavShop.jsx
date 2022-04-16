import {NavLink} from "react-router-dom";
import classes from './NavShop.module.scss'


const NavShop = () => {
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
            <NavLink to="/contact" className={`${classes.NavBar} ${classes.btn}`}>
                    CONTACT
            </NavLink>
        </div>
    )

}

export default NavShop;