import classes from "./CardThree.module.css";
import ThreeCard from "../img/CardThree.svg";

const CardThree = () => {
    return (
        <div className={classes.CardThree}>
            <img src={ThreeCard} className={classes.img} alt=""/>
            <div className={classes.text}>Environmentally friendly products</div>
            <div className={classes.text_two}>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at</div>
        </div>
    )

}

export default CardThree;