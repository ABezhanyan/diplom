import classes from "./CatalogThree.module.css";
import ThreeCard from "../Img/ThreeCard.png"

const CatalogThree = () => {
    return (
        <div className={classes.Card}>
            <img src={ThreeCard} className={classes.img} alt=""/>
            <div className={classes.text}>Peach</div>
            <div className={classes.text_two}>$4.60</div>
            <div className={classes.text_three}>
                <button className={classes.btn}>ADD TO CART</button>
            </div>
        </div>
    )

}

export default CatalogThree;