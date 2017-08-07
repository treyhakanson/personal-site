// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import { SimpleSpacer } from 'components/Spacer';

export default class HomePageJumbotron extends Component {
    render() {
        return (
            <div className="HomePageJumbotron">
                <div className="HomePageJumbotron__Left">
                    <h1>Let&apos;s build something.</h1>
                    <SimpleSpacer.Center light />
                    <h3>Trey Hakanson, full-stack developer and designer.</h3>
                </div>
                <div className="HomePageJumbotron__Right">

                </div>
            </div>
        );
    }
}
