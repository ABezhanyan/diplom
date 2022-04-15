import classes from './FooterShop.module.scss'
import LogoShop from "./LogoShop/LogoShop";
import NavShop from "./NavShop/NavShop";
import UpShop from "./UpShop/UpShop";

const FooterShop = () => {
    return (
        <div className={classes.FooterShop_main}>
            <div className={classes.FooterShop}>
                <LogoShop />
                <NavShop />
                <UpShop />
            </div>
        </div>
    )
}

export default FooterShop;