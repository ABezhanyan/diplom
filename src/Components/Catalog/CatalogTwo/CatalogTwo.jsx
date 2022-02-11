import classes from "./CatalogTwo.module.css";
import TwoCard from "../Img/TwoCard.jpg"

const CatalogTwo = () => {
    return (
        <div className={classes.Card}>
            <img src={TwoCard} className={classes.img} alt=""/>
            <div className={classes.text}>Strawberry</div>
            <div className={classes.text_two}>$5.40</div>
            <div className={classes.text_three}>
                <button className={classes.btn}>ADD TO CART</button>
            </div>
        </div>
    )

}

export default CatalogTwo;