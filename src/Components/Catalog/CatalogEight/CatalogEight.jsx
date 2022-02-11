import classes from "./CatalogEight.module.css";
import EightCard from "../Img/EightCard.jpg"

const CatalogEight = () => {
    return (
        <div className={classes.Card}>
            <img src={EightCard} className={classes.img} alt=""/>
            <div className={classes.text}>Tangerine</div>
            <div className={classes.text_two}>$3.37</div>
            <div className={classes.text_three}>
                <button className={classes.btn}>ADD TO CART</button>
            </div>
        </div>
    )

}

export default CatalogEight;