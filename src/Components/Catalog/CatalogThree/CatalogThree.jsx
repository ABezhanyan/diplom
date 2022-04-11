import classes from "./CatalogThree.module.css";
import ThreeCard from "../Img/ThreeCard.png"

const CatalogThree = () => {
    return (
        <div className={classes.Card}>
            <img src={ThreeCard} className={classes.img} alt=""/>
            <div className={classes.text}>Peach</div>
            <div className={classes.text_two}>$4.60</div>
            <div className="container">
                <div className="button-effect">
                    <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                </div>
            </div>
        </div>
    )

}

export default CatalogThree;