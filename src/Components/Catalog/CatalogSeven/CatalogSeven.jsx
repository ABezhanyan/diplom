import classes from "./CatalogSeven.module.css";
import SevenCard from "../Img/SevenCard.jpg"

const CatalogSeven = () => {
    return (
        <div className={classes.Card}>
            <img src={SevenCard} className={classes.img} alt=""/>
            <div className={classes.text}>Orange</div>
            <div className={classes.text_two}>$5.20</div>
            <div className="container">
                <div className="button-effect">
                    <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                </div>
            </div>
        </div>
    )

}

export default CatalogSeven;