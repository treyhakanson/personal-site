// external modules
import React, { Component, PropTypes } from 'react';

class Input extends Component {
    static propTypes = {
        type: PropTypes.string,
        placeholder: PropTypes.string
    };

    static defaultProps = {
        type: 'text'
    };

    render() {
        return (
            <input className="TextInput--Line bottom-margin--md"
                type={this.props.type}
                placeholder={this.props.placeholder} />
        );
    }
}

class Area extends Component {
    static propTypes = {
        placeholder: PropTypes.string,
        lines: PropTypes.number
    };

    render() {
        return (
            <textarea className="TextInput--Area bottom-margin--md"
                rows={this.props.lines}
                placeholder={this.props.placeholder} />
        );
    }
}

export default {
    Line: Input,
    Area
};
