import classes from "./FreshImg.module.css";
import Fresh from "../Img/Fresh.svg"

const FreshImg = () => {
    return (
        <div className={classes.fresh}>
            <img className={classes.freshImg} src={Fresh} alt=""/>
        </div>
    )
}

export default FreshImg;