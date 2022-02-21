import classes from "./ContactUS_Text.module.css";

const ContactUS_Text = () => {
    return (
        <div className={classes.HeaderMain}>
            <div className={classes.header}>
                CONTACT US
            </div>
            <div className={classes.ContactInfo}>
                <div className={classes.address}>
                    Address
                </div>
                <div className={classes.text}>
                    Apt 4B<br/>
                    2311 North Los Robles Avenue
                </div>
                <div className={classes.phone}>
                    Phone
                </div>
                <div className={classes.text}>
                    +7 924 488 32 20<br/>
                    +7 924 522 42 30
                </div>
                <div className={classes.e_mail}>
                    E-mail
                </div>
                <div className={classes.text}>
                    organicfood@info.ru
                </div>
            </div>
        </div>
    )

}

export default ContactUS_Text;