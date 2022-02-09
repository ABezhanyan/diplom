import classes from "./CardOne.module.css";
import OneCard from "../img/CardOne.svg"

const CardOne = () => {
    return (
        <div className={classes.CardOne}>
            <img src={OneCard} className={classes.img} alt=""/>
            <a>Environmentally friendly products</a>
            <a>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at</a>
        </div>
    )

}

export default CardOne;