import classes from "./ContactUP.module.css";
import Up from "../Img/Up.svg"

const ContactUP = () => {
    return (
        <div className={classes.ContactUP}>
            <img className={classes.img} src={Up} />
        </div>
    )

}

export default ContactUP;