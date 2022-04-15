import classes from'./AboutSubscribe.module.scss';
import SubText from "./SubscribeText/SubText";
import SubForm from "./SubscribeForm/SubForm";



const AboutSubscribe = () => {
    return (
        <div className={classes.Subscribe}>
            <SubText />
            <SubForm />
        </div>
    )
}

export default AboutSubscribe;