import classes from "./CatalogFive.module.css";
import FiveCard from "../Img/FiveCard.jpg";
import "./ContactFive.scss";

const CatalogFive = () => {
    return (
        <div className={classes.Card}>
            <img src={FiveCard} className={classes.img} alt=""/>
            <div className={classes.text}>Pepper</div>
            <div className={classes.text_two}>$2.30</div>
            <div className="container">
                <div className="button-effect">
                    <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                </div>
            </div>
        </div>
    )

}

export default CatalogFive;