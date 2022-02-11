import classes from "./CatalogNine.module.css";
import NineCard from "../Img/NineCard.jpg"

const CatalogNine = () => {
    return (
        <div className={classes.Card}>
            <img src={NineCard} className={classes.img} alt=""/>
            <div className={classes.text}>Tomato</div>
            <div className={classes.text_two}>$5.00</div>
            <div className={classes.text_three}>
                <button className={classes.btn}>ADD TO CART</button>
            </div>
        </div>
    )

}

export default CatalogNine;