// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import { SOCIAL } from 'utils/constants';
import { IconButton } from 'components/Button';
import { SimpleSpacer } from 'components/Spacer';
import MainLogo from 'assets/svgs/main-logo.svg';
import DownArrow from 'assets/svgs/down-arrow.svg';
import SOIcon from 'assets/svgs/so-icon.svg';
import GHIcon from 'assets/svgs/gh-icon.svg';

export default class HomePageJumbotron extends Component {
    scrollDown() {
        const total = Math.min(window.innerHeight,
            document.body.scrollHeight - window.innerHeight);
        const increment = total / 15;
        const interval = setInterval(() => {
            if (window.scrollY >= total) {
                clearInterval(interval);
            } else {
                window.scrollTo(0, window.scrollY + increment);
            }
        }, 10);
    }

    render() {
        return (
            <div className="HomePageJumbotron">
                <MainLogo width={200} height={200} />
                <h1 className="text-center">Let&apos;s build something.</h1>
                <SimpleSpacer.Center light />
                <h4 className="text-center">Trey Hakanson, full-stack developer and designer.</h4>
                <div className="margin-top--sm">
                   <a className="margin-right--sm" href={SOCIAL.STACKOVERFLOW} target="_blank" rel="nofollow">
                      <SOIcon width={32} height={32} />
                   </a>
                   <a href={SOCIAL.GITHUB} target="_blank" rel="nofollow">
                      <GHIcon width={32} height={32} />
                   </a>
                </div>
                <IconButton className="margin-top--lg"
                    icon={<DownArrow width={40} height={40} />}
                    onClick={this.scrollDown.bind(this)}/>
            </div>
        );
    }
}
