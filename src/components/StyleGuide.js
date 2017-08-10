// external modules
import React, { Component } from 'react';

// custom modules
import { Button, IconButton } from 'components/Button';
import Code from 'components/Code';
import { SimpleSpacer } from 'components/Spacer';
import DownArrow from 'svgs/down-arrow.svg';

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
                    <h1 className="bottom-margin--md">Heading 1</h1>
                    <h2 className="bottom-margin--md">Heading 2</h2>
                    <h3 className="bottom-margin--md">Sub Heading 1</h3>
                    <h4 className="bottom-margin--md">Sub Heading 2</h4>
                    <p className="bottom-margin--md">Regular Text</p>
                    <Code className="bottom-margin--md" code={CODE} />
                    <p>Inline <span className="code">code</span></p>
                </div>
                <div className="bottom-margin--md">
                    <Button.Modern className="horiz-spacing--md" text="Click Me" />
                </div>
                <div className="bottom-margin--md">
                    <Button.Fill className="horiz-spacing--md" text="Click Me" />
                    <Button.LightFill className="horiz-spacing--md" text="Click Me" />
                    <Button.Border className="horiz-spacing--md" text="Click Me" />
                </div>
                <div className="bottom-margin--md">
                    <IconButton className="horiz-spacing--md" icon={<DownArrow width={40} height={40} />} />
                </div>
            </div>
        );
    }
}
