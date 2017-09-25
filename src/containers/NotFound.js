// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import { SimpleSpacer } from 'components/Spacer';
import { Button } from 'components/Button';

export default class NotFound extends Component {
    render() {
        return (
            <div className="NotFound text-center">
                <h1>Nothing Here.</h1>
                <SimpleSpacer.Long />
                <h3>Maybe go back to the homepage?</h3>
                <Button.Modern className="margin-top--sm"
                    text="Home"
                    link="/" />
            </div>
        );
    }
}
