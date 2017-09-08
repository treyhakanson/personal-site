// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import Input from 'components/TextInput';
import { SimpleSpacer } from 'components/Spacer';
import { Button } from 'components/Button';
import { SHARED_CONSTANTS } from 'utils/constants';

// pull off required shared constants
const { API_INFO } = SHARED_CONSTANTS;

export default class ContactForm extends Component {
    submitContactForm() {
        axios.post(`/api/v${API_INFO.VERSION}/contact-form/submit`, {
            ...this.state
        }).then(console.log)
        .catch(console.error);
    }

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    valueUpdated(key, val) {
        this.setState({ [key]: val });
    }

    render() {
        return (
            <div className="ContactForm padding--md">
                <div className="ContactForm__FormContent">
                    <h2>Contact</h2>
                    <SimpleSpacer.Medium />
                    <p className="bottom-margin--md">Drop me a line and I'll get back to you as soon as I can</p>
                    <Input.Line placeholder="Name"
                        value={this.state.name}
                        onChange={val => this.valueUpdated('name', val)}
                        required />
                    <Input.Line placeholder="Email"
                        value={this.state.email}
                        onChange={val => this.valueUpdated('email', val)}
                        required />
                    <Input.Area placeholder="Message"
                        lines={5}
                        value={this.state.message}
                        onChange={val => this.valueUpdated('message', val)}
                        required />
                        <Button.Modern text="Send"
                            onClick={this.submitContactForm.bind(this)}/>
                </div>
            </div>
        );
    }
}
