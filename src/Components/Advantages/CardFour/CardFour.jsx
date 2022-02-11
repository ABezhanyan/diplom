import classes from "./CardFour.module.css";
import FourCard from "../img/CardFour.svg"

const CardFour = () => {
    return (
        <div className={classes.CardFour}>
            <img src={FourCard} className={classes.img} alt=""/>
            <div className={classes.text}>Environmentally friendly products</div>
            <div className={classes.text_two}>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at</div>
        </div>
    )

}

export default CardFour;