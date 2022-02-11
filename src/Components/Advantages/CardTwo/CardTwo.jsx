import classes from "./CardTwo.module.css";
import TwoCard from "../img/CardTwo.svg"

const CardTwo = () => {
    return (
        <div className={classes.CardTwo}>
            <img src={TwoCard} className={classes.img} alt=""/>
            <div className={classes.text}>Environmentally friendly products</div>
            <div className={classes.text_two}>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at</div>
        </div>
    )

}

export default CardTwo;