import classes from "./CardTwo.module.css";
import TwoCard from "../img/CardTwo.svg"

const CardTwo = () => {
    return (
        <div className={classes.CardTwo}>
            <img src={TwoCard} className={classes.img} alt=""/>
            <a>Environmentally friendly products</a>
            <a>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at</a>
        </div>
    )

}

export default CardTwo;