import classes from "./ContactUSTwo.module.scss";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";


const ContactUSTwo = () => {
    return (
        <div className={classes.ContactUS}>
            <div className={classes.ContactUS_one}>
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactUSTwo;