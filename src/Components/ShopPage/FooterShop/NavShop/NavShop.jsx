import {NavLink} from "react-router-dom";
import classes from './NavShop.module.scss'


const NavShop = () => {
    return (
        <div className={classes.nav}>
            <div className={`${classes.NavBar} ${classes.btn}`}>
                HOME
            </div>
            <div className={`${classes.NavBar} ${classes.btn}`}>
                SHOP
            </div>
            <div className={`${classes.NavBar} ${classes.btn}`}>
                ABOUT
            </div>
            <div className={`${classes.NavBar} ${classes.btn}`}>
                GALLERY
            </div>
            <div className={`${classes.NavBar} ${classes.btn}`}>
                CONTACT
            </div>
        </div>
    )

}

export default NavShop;