import '../../../App.css';
import AHeader from "./AHeaderMain/AHeader";
import CardOne from "./CardOne/CardOne";
import CardTwo from "./CardTwo/CardTwo";
import CardThree from "./CardThree/CardThree";
import CardFour from "./CardFour/CardFour";
import classes from './Advantages.module.css';

const Advantages = () => {
    return (
        <div className={classes.Advantages}>
            <AHeader />
            <CardOne />
            <CardTwo />
            <CardThree />
            <CardFour />
        </div>
    )

}

export default Advantages;