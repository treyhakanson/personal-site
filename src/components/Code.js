// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import { highlight } from 'utils/syntax-highlighting';

export default class Code extends Component {
    static propTypes = {
        code: PropTypes.string.isRequired,
        className: PropTypes.string
    };

    componentDidMount() {
        highlight(this.code);
    }

    componentDidUpdate(nextProps, nextState) {
        highlight(this.code);
    }

    render() {
        return (
            <pre className={this.props.className}
                ref={code => { this.code = code }}>
                <code>{this.props.code}</code>
            </pre>
        );
    }
}
