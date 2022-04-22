import classes from './ShopHeader.module.scss';
import shopHeader from "./img/ShopHeader.jpg";

const ShopHeader = () => {
    return (
        <div className={classes.ShopHeader}>
            <img className={classes.img_shop} src={shopHeader} alt="" />
        </div>
    )
}

export default ShopHeader;