import classes from "./CatalogSeven.module.css";
import SevenCard from "../Img/SevenCard.jpg"

const CatalogSeven = () => {
    return (
        <div className={classes.Card}>
            <img src={SevenCard} className={classes.img} alt=""/>
            <div className={classes.text}>Orange</div>
            <div className={classes.text_two}>$5.20</div>
            <div className={classes.text_three}>
                <button className={classes.btn}>ADD TO CART</button>
            </div>
        </div>
    )

}

export default CatalogSeven;