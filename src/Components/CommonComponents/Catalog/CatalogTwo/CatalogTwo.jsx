import classes from "./CatalogTwo.module.css";
import TwoCard from "../Img/TwoCard.jpg"

const CatalogTwo = () => {
    return (
        <div className={classes.Card}>
            <img src={TwoCard} className={classes.img} alt=""/>
            <div className={classes.text}>Strawberry</div>
            <div className={classes.text_two}>$5.40</div>
            <div className="container">
                <div className="button-effect">
                    <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                </div>
            </div>
        </div>
    )

}

export default CatalogTwo;