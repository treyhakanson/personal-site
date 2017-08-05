// external modules
import React, { Component } from 'react';

// custom modules
import { highlight } from 'utils/syntax-highlighting';
import Button from 'components/Button';

const CODE = `\
// code
const greet = () => {
    console.log("Hello World!");
};`;

export default class StyleGuide extends Component {
    componentDidMount() {
        highlight(this.code);
    }

    componentDidUpdate(nextProps, nextState) {
        highlight(this.code);
    }

    render() {
        return (
            <div className="StyleGuide">
                <div className="horiz-spacing--md">
                    <hr />
                    <h1 className="bottom-margin--md">Heading 1</h1>
                    <h2 className="bottom-margin--md">Heading 2</h2>
                    <h3 className="bottom-margin--md">Sub Heading 1</h3>
                    <h4 className="bottom-margin--md">Sub Heading 2</h4>
                    <p className="bottom-margin--md">Regular Text</p>
                    <pre className="bottom-margin--md" ref={code => { this.code = code }}><code>{CODE}</code></pre>
                </div>
                <div className="bottom-margin--md">
                    <Button.Modern className="horiz-spacing--md" text="Click Me" />
                </div>
                <div>
                    <Button.Fill className="horiz-spacing--md" text="Click Me" />
                    <Button.LightFill className="horiz-spacing--md" text="Click Me" />
                    <Button.Border className="horiz-spacing--md" text="Click Me" />
                </div>
            </div>
        );
    }
}
