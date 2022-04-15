import classes from "./CatalogNine.module.css";
import NineCard from "../Img/NineCard.jpg"

const CatalogNine = () => {
    return (
        <div className={classes.Card}>
            <img src={NineCard} className={classes.img} alt=""/>
            <div className={classes.text}>Tomato</div>
            <div className={classes.text_two}>$5.00</div>
            <div className="container">
                <div className="button-effect">
                    <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                </div>
            </div>
        </div>
    )

}

export default CatalogNine;