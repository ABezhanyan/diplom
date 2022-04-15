import classes from "./ContactForm.module.css";
import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChangeOne = this.handleChangeOne.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTwo = this.handleChangeTwo.bind(this);
        this.handleChangeThree = this.handleChangeThree.bind(this);
        this.handleChangeFour = this.handleChangeFour.bind(this);
    }

    handleChangeOne(event) {
        this.setState({valueOne: event.target.valueOne});
    }

    handleChangeTwo(event) {
        this.setState({valueTwo: event.target.valueTwo});
    }

    handleChangeThree(event) {
        this.setState({valueThree: event.target.valueThree});
    }

    handleChangeFour(event) {
        this.setState({valueFour: event.target.valueFour});
    }


    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.valueOne + this.state.valueTwo + this.state.valueThree);
        event.preventDefault();
    }


    render() {
        return (
            <div className="container">
                <div className={classes.form_header}>
                    Get in touch with us
                </div>
                <div className={classes.contact_form_main}>
                    <form className={classes.contact_form} onSubmit={this.handleSubmit}>
                        <div>
                            <input className={classes.form_text} type="text"  placeholder="Your name" value={this.state.valueOne} onChange={this.handleChangeOne} />
                        </div>
                        <div>
                            <input className={classes.form_text}  type="text" placeholder="Your phone" value={this.state.valueTwo} onChange={this.handleChangeTwo} />
                        </div>
                        <div>
                            <input className={classes.form_text}  type="text" placeholder="Your email" value={this.state.valueThree} onChange={this.handleChangeThree} />
                        </div>
                        <div>
                            <input className={classes.form_text_last}  type="text" placeholder="Your massage" value={this.state.valueFour} onChange={this.handleChangeFour} />
                        </div>
                        <input className={classes.form_btn} type="submit" value="Send massege" />
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactForm;