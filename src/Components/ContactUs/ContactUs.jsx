import '../../App.css';
import {Route, Routes} from "react-router";
import ContactHeader from "./ContactHeader/ContactHeader";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";
import ContactOrganicText_Social from "./ContactOrganicText/ContactOrganicText_Social";
import ContactMainMenu from "./ContactMainMenu/ContactMainMenu";
import ContactUS_Text from "./ContactUS_Text/ContactUS_Text";
import ContactUP from "./ContactUP/ContactUP";
import All from "./All2022/All";


const ContactUs = () => {
    return (
        <div className="ContactUS">
            <div className="ContactUS_one">
                <ContactHeader />
                <ContactInfo />
                <ContactForm />
            </div>
            <div className="ContactUS_two">
                <div className="ContactUS_coll">
                    <ContactOrganicText_Social />
                    <ContactMainMenu />
                    <ContactUS_Text />
                    <ContactUP />
                </div>
                <div className="ContactAll">
                    <All />
                </div>
            </div>
        </div>
    )
}

export default ContactUs;