import classes from "./CardOne.module.css";
import OneCard from "../img/CardOne.svg"

const CardOne = () => {
    return (
        <div className={classes.CardOne}>
            <img src={OneCard} className={classes.img} alt=""/>
            <div className={classes.text}>Environmentally friendly products</div>
            <div className={classes.text_two}>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at</div>
        </div>
    )

}

export default CardOne;