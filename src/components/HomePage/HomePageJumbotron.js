// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import { IconButton } from 'components/Button';
import { SimpleSpacer } from 'components/Spacer';
import MainLogo from 'svgs/main-logo.svg';
import DownArrow from 'svgs/down-arrow.svg';

export default class HomePageJumbotron extends Component {
    render() {
        return (
            <div className="HomePageJumbotron">
                <div className="HomePageJumbotron__Left">
                    <MainLogo width={200} height={200} />
                    <h1 className="text-center">Let&apos;s build something.</h1>
                    <SimpleSpacer.Center light />
                    <h3 className="text-center">Trey Hakanson, full-stack developer and designer.</h3>
                    <IconButton className="top-margin--lg" icon={<DownArrow width={40} height={40} />} />
                </div>
                <div className="HomePageJumbotron__Right" />
            </div>
        );
    }
}
