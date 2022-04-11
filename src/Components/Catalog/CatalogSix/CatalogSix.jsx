import classes from "./CatalogSix.module.css";
import SixCard from "../Img/SixCard.jpg"

const CatalogSix = () => {
    return (
        <div className={classes.Card}>
            <img src={SixCard} className={classes.img} alt=""/>
            <div className={classes.text}>Limon</div>
            <div className={classes.text_two}>$8.30</div>
            <div className="container">
                <div className="button-effect">
                    <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                </div>
            </div>
        </div>
    )

}

export default CatalogSix;