// external modules
import React, { Component } from 'react';

// custom modules
import { Button, IconButton } from 'components/Button';
import Code from 'components/Code';
import { SimpleSpacer } from 'components/Spacer';
import AnimatedBar from 'components/AnimatedBar';
import DownArrow from 'assets/svgs/down-arrow.svg';
import MailIcon from 'assets/svgs/mail-icon.svg';
import TextInput from 'components/TextInput';

const CODE = `\
// code
const greet = () => {
    console.log("Hello World!");
};`;

// TODO: add hover style and click to copy to clipboard
export default class StyleGuide extends Component {
    render() {
        return (
            <div className="StyleGuide">
                <div className="horiz-spacing--md">
                    <SimpleSpacer.Short />
                    <SimpleSpacer.Medium />
                    <SimpleSpacer.Long />
                    <h1 className="margin-bottom--md">Heading 1</h1>
                    <h2 className="margin-bottom--md">Heading 2</h2>
                    <h3 className="margin-bottom--md">Sub Heading 1</h3>
                    <h4 className="margin-bottom--md">Sub Heading 2</h4>
                    <p className="margin-bottom--md">Regular Text</p>
                    <Code className="margin-bottom--md" code={CODE} />
                    <p>Inline <span className="code">code</span></p>
                </div>
                <div className="margin-bottom--md horiz-spacing--md">
                    <Button.Modern text="Click Me" />
                </div>
                <div className="margin-bottom--md horiz-spacing--md">
                    <Button.Dark className="margin-right--sm" text="Click Me" />
                    <Button.Medium className="margin-right--sm" text="Click Me" />
                    <Button.Light className="margin-right--sm" text="Click Me" />
                    <Button.Border text="Click Me" />
                </div>
                <div className="margin-bottom--md horiz-spacing--md">
                    <IconButton icon={<DownArrow width={40} height={40} />} />
                </div>
                <div className="margin-bottom--md horiz-spacing--md" style={{
                    width: '50%'
                }}>
                    <AnimatedBar className="margin-bottom--md"
                        title="Hello World"
                        subtitle="Look at this progress bar."
                        fill={50}
                        speed={1000} />
                    <AnimatedBar className="margin-bottom--md"
                        title="Hello World"
                        fill={25}
                        speed={500} />
                    <AnimatedBar className="margin-bottom--md"
                        subtitle="Look at this progress bar."
                        fill={70} />
                </div>
                <div className="margin-bottom--md horiz-spacing--md" style={{
                    width: '50%'
                }}>
                    <TextInput.Line placeholder="Line of text" />
                    <TextInput.Area placeholder="Large block of text"
                        lines={5} />
                </div>
                <div className="margin-bottom--md horiz-spacing--md">
                    <div className="fill--primary padding--md display--inline-block">
                        <MailIcon width={150} height={150} />
                    </div>
                </div>
            </div>
        );
    }
}
