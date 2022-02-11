import classes from "./CatalogOne.module.css";
import OneCard from "../Img/OneCard.jpg"

const CatalogOne = () => {
    return (
        <div className={classes.Card}>
            <img src={OneCard} className={classes.img} alt=""/>
            <div className={classes.text}>Blackcurrant</div>
            <div className={classes.text_two}>$6.50</div>
            <div className={classes.text_three}>
                <button className={classes.btn}>ADD TO CART</button>
            </div>
        </div>
    )

}

export default CatalogOne;