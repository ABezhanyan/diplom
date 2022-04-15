import classes from "./SubForm.module.css";
import React from "react";

class SubForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <form className={classes.sub_form} onSubmit={this.handleSubmit}>
                <label >
                    <input className={classes.form_one} type="text" placeholder=" Your email" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input className={classes.form_two} type="submit" value="subscribe" />
            </form>
        );
    }
}

export default SubForm;