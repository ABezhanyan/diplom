import classes from "./CatalogSix.module.css";
import SixCard from "../Img/SixCard.jpg"

const CatalogSix = () => {
    return (
        <div className={classes.Card}>
            <img src={SixCard} className={classes.img} alt=""/>
            <div className={classes.text}>Limon</div>
            <div className={classes.text_two}>$8.30</div>
            <div className={classes.text_three}>
                <button className={classes.btn}>ADD TO CART</button>
            </div>
        </div>
    )

}

export default CatalogSix;