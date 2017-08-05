// external modules
import React, { Component } from 'react';

// custom modules
import { highlight } from 'utils/syntax-highlighting';

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
            <div className="TestComponent">
                <h1 className="bottom-margin--md">Heading 1</h1>
                <h2 className="bottom-margin--md">Heading 2</h2>
                <h3 className="bottom-margin--md">Sub Heading 1</h3>
                <h4 className="bottom-margin--md">Sub Heading 2</h4>
                <p className="bottom-margin--md">Regular Text</p>
                <pre ref={code => { this.code = code }}><code>{CODE}</code></pre>
            </div>
        );
    }
}
