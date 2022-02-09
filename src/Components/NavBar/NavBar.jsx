import classes from './NavBar.module.css';


const NavBar = () => {
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

export default NavBar;