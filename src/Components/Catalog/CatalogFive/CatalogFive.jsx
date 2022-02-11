import classes from "./CatalogFive.module.css";
import FiveCard from "../Img/FiveCard.jpg"

const CatalogFive = () => {
    return (
        <div className={classes.Card}>
            <img src={FiveCard} className={classes.img} alt=""/>
            <div className={classes.text}>Pepper</div>
            <div className={classes.text_two}>$2.30</div>
            <div className={classes.text_three}>
                <button className={classes.btn}>ADD TO CART</button>
            </div>
        </div>
    )

}

export default CatalogFive;