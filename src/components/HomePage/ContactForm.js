// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import Input from 'components/TextInput';
import { SimpleSpacer } from 'components/Spacer';
import { Button } from 'components/Button';

export default class ContactForm extends Component {
    render() {
        return (
            <div className="ContactForm padding--md">
                <div className="ContactForm__FormContent">
                    <h2>Contact</h2>
                    <SimpleSpacer.Medium />
                    <p className="bottom-margin--md">Drop me a line and I'll get back to you as soon as I can</p>
                    <Input.Line placeholder="Name" />
                    <Input.Line placeholder="Email" />
                    <Input.Area placeholder="Message"
                        lines={5}/>
                        <Button.Modern text="Send" />
                </div>
            </div>
        );
    }
}
