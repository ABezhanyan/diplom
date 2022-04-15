import classes from "./CatalogFour.module.css";
import FourCard from "../Img/FourCard.jpg"

const CatalogFour = () => {
    return (
        <div className={classes.Card}>
            <img src={FourCard} className={classes.img} alt=""/>
            <div className={classes.text}>Pomegranate</div>
            <div className={classes.text_two}>$8.50</div>
            <div className="container">
                <div className="button-effect">
                    <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                </div>
            </div>
        </div>
    )

}

export default CatalogFour;