// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import Input from 'components/TextInput';
import { SimpleSpacer } from 'components/Spacer';
import { Button } from 'components/Button';
import Loader from 'components/Loader';
import { STATUS, SHARED_CONSTANTS } from 'utils/constants';

// pull off required shared constants
const { API_INFO } = SHARED_CONSTANTS;

export default class ContactForm extends Component {
    submitContactForm() {
        if (this.state.name && this.state.email && this.state.message) {
            this.setState({ status: STATUS.LOADING });
            axios.post(`/api/v${API_INFO.VERSION}/contact-form/submit`, {
                ...this.state
            }).then(({ data }) => {
                this.setState({ status: STATUS.SUCCESS });
                console.log(data);
            }).catch(err => {
                this.setState({ status: STATUS.ERROR });
                console.error(err);
            });
        }

    }

    constructor(props) {
        super(props);

        this.state = {
            status: STATUS.IDLE,
            name: '',
            email: '',
            message: ''
        };
    }

    valueUpdated(key, val) {
        this.setState({ [key]: val });
    }

    render() {
        console.log(this.state.status);
        return (
            <div className="ContactForm padding-all--md">
                <div className="ContactForm__FormContent">
                    <h2>Contact</h2>
                    <SimpleSpacer.Medium />
                    <p className="margin-bottom--md">Drop me a line and I'll get back to you as soon as I can</p>
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
                        onClick={this.submitContactForm.bind(this)}
                        disabled={this.state.status !== STATUS.IDLE} />
                    {this.state.status === STATUS.LOADING && <Loader />}
                    {this.state.status === STATUS.SUCCESS && <div className="Block--success">Your data has been received; thanks!</div>}
                    {this.state.status === STATUS.ERROR && <div className="Block--error">An error occurred, please try again later.</div>}
                </div>
            </div>
        );
    }
}
