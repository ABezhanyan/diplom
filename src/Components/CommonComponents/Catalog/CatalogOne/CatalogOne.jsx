import classes from "./CatalogOne.module.css";
import OneCard from "../Img/OneCard.jpg"

const CatalogOne = () => {
    return (
        <div className={classes.Card}>
            <img src={OneCard} className={classes.img} alt=""/>
            <div className={classes.text}>Blackcurrant</div>
            <div className={classes.text_two}>$6.50</div>
            <div className="container">
                <div className="button-effect">
                    <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                </div>
            </div>
        </div>
    )

}

export default CatalogOne;