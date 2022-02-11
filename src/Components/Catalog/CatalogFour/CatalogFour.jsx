import classes from "./CatalogFour.module.css";
import FourCard from "../Img/FourCard.jpg"

const CatalogFour = () => {
    return (
        <div className={classes.Card}>
            <img src={FourCard} className={classes.img} alt=""/>
            <div className={classes.text}>Pomegranate</div>
            <div className={classes.text_two}>$8.50</div>
            <div className={classes.text_three}>
                <button className={classes.btn}>ADD TO CART</button>
            </div>
        </div>
    )

}

export default CatalogFour;