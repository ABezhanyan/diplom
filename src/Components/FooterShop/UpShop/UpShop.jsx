import classes from "./UpShop.module.scss";
import Up from "../img/Up.svg"

const UpShop = () => {
    return (
        <div className={classes.ContactUP}>
            <img className={classes.img} src={Up} />
        </div>
    )

}

export default UpShop;