import classes from "./CatalogEight.module.css";
import EightCard from "../Img/EightCard.jpg"


const CatalogEight = () => {
    return (
        <div className={classes.Card}>
            <img src={EightCard} className={classes.img} alt=""/>
            <div className={classes.text}>Tangerine</div>
            <div className={classes.text_two}>$3.37</div>
            <div className="container">
                <div className="button-effect">
                    <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                </div>
            </div>
        </div>
    )

}

export default CatalogEight;