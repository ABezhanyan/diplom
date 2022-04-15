import classes from "./ContactOrganicText_Social.module.css";
import Instagram from "../Img/Instagram.svg"
import Facebook from "../Img/Facebook.svg"
import Twitter from "../Img/Twitter.svg"
import Linkedin from "../Img/Linkedin.svg"

const ContactOrganicText_Social = () => {
    return (
        <div className={classes.HeaderMain}>
            <div className={classes.header}>
                ORGANIC FOOD
            </div>
            <div className={classes.text}>
                Amet aliquam tellus enim nam aliquam, condimentum mi ipsum. Nec nunc a neque, cursus. Erat amet gravida proin fames.
            </div>
            <div>
                <ul className={classes.social}>
                    <li className={classes.img}>
                        <img className={classes.img_size} src={Instagram}/>
                    </li>
                    <li className={classes.img}>
                        <img className={classes.img_size} src={Facebook}/>
                    </li>
                    <li className={classes.img}>
                        <img className={classes.img_size} src={Twitter}/>
                    </li>
                    <li className={classes.img}>
                        <img className={classes.img_size} src={Linkedin}/>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default ContactOrganicText_Social;