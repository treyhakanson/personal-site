// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import Input from 'components/TextInput';
import Loader from 'components/Loader';
import { ErrorBlock, SuccessBlock } from 'components/Block';
import { validateEmail } from 'utils/cleaning';
import { SimpleSpacer } from 'components/Spacer';
import { Button } from 'components/Button';
import { STATUS, SHARED_CONSTANTS } from 'utils/constants';

// pull off required shared constants
const { API_INFO } = SHARED_CONSTANTS;

export default class ContactForm extends Component {
    submitContactForm() {
        if (this.state.name && validateEmail(this.state.email) && this.state.message) {
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
        } else {
            const err = ['Please address the following errors:'];
            if (!this.state.name) {
                err.push('A name is required.');
            }
            if (!validateEmail(this.state.email)) {
                err.push('A valid email value is required.');
            }
            if (!this.state.message) {
                err.push('A message is required.');
            }
            this.setState({ inputError: err.join(' ') });
        }

    }

    constructor(props) {
        super(props);

        this.state = {
            status: STATUS.IDLE,
            name: '',
            email: '',
            message: '',
            inputError: ''
        };
    }

    valueUpdated(key, val) {
        this.setState({ [key]: val });
    }

    render() {
        return (
            <div className="ContactForm">
                <div className="ContactForm__FormContent padding-all--md">
                    <h2>Contact</h2>
                    <SimpleSpacer.Medium />
                    <p className="margin-bottom--md">Have a project you need a hand on? Drop me a line and I'll get back to you as soon as I can.</p>
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
                    {this.state.status === STATUS.LOADING && <Loader />}
                    {this.state.status === STATUS.SUCCESS && <SuccessBlock text="Your form has been received; thanks!" />}
                    {this.state.status === STATUS.ERROR && <ErrorBlock text="An error occurred, please try again later." />}
                    {!!this.state.inputError && <ErrorBlock text={this.state.inputError} />}
                    <Button.Modern text="Send"
                        onClick={this.submitContactForm.bind(this)}
                        disabled={this.state.status !== STATUS.IDLE} />
                </div>
            </div>
        );
    }
}
