import classes from "./CardFour.module.css";
import FourCard from "../img/CardFour.svg"

const CardFour = () => {
    return (
        <div className={classes.CardFour}>
            <img src={FourCard} className={classes.img} alt=""/>
            <a>Environmentally friendly products</a>
            <a>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at</a>
        </div>
    )

}

export default CardFour;