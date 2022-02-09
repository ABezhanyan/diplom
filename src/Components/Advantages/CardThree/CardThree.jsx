import classes from "./CardThree.module.css";
import ThreeCard from "../img/CardThree.svg";

const CardThree = () => {
    return (
        <div className={classes.CardThree}>
            <img src={ThreeCard} className={classes.img} alt=""/>
            <a>Environmentally friendly products</a>
            <a>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at</a>
        </div>
    )

}

export default CardThree;