// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import { IconButton } from 'components/Button';
import { SimpleSpacer } from 'components/Spacer';
import MainLogo from 'assets/svgs/main-logo.svg';
import DownArrow from 'assets/svgs/down-arrow.svg';

export default class HomePageJumbotron extends Component {
    render() {
        return (
            <div className="HomePageJumbotron">
                <MainLogo width={200} height={200} />
                <h1 className="text-center">Let&apos;s build something.</h1>
                <SimpleSpacer.Center light />
                <h4 className="text-center">Trey Hakanson, full-stack developer and designer.</h4>
                <IconButton className="top-margin--lg" icon={<DownArrow width={40} height={40} />} />
            </div>
        );
    }
}
