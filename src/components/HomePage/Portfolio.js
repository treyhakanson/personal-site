// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import { SimpleSpacer } from 'components/Spacer';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio margin-top--md padding-all--sm">
                <div className="Portfolio__Content padding-all--sm fill--light">
                    <h2>About Me</h2>
                    <SimpleSpacer.Medium />
                    <p>
                        Hi, I&apos;m Trey Hakanson, its nice to meet you.
                        I&apos;m a frontend developer and UI/UX designer based
                        in Columbus Ohio. To learn more about me and what I do,
                        check out some of these links or my blog.
                    </p>
                    {/* Linkedin, Resume, portfolio (coming soon), etc. */}
                </div>
            </div>
        );
    }
}
