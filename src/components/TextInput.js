// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import { INPUT_TYPES } from 'utils/constants';

function verifyValueProp(props, propName, componentName) {
    if (props[propName] == undefined) return new Error(
            '`' + propName + '` must be supplied to' +
            ' `' + componentName + '`.'
        );

    const valueType = typeof props[propName];
    const type = props.type || Input.defaultProps.type;

    switch (type) {
        case 'number':
            if (valueType != 'number') return new Error(
                    'Invalid prop `' + propName + '` supplied to' +
                    ' `' + componentName + '`. Since `type` prop was ' +
                    'specified as ' + type + ', ' + propName + ' must' +
                    ' be of type `number`.'
                );
        case 'text':
            if (valueType != 'string') return new Error(
                    'Invalid prop `' + propName + '` supplied to' +
                    ' `' + componentName + '`. Since `type` prop was ' +
                    'specified as ' + type + ', ' + propName + ' must' +
                    ' be of type `string`.'
                );
    }
}

class InputBase extends Component {
    static propTypes = {
        type: PropTypes.oneOf(Object.values(INPUT_TYPES)),
        placeholder: PropTypes.string,
        onChange: PropTypes.func,
        required: PropTypes.bool
    }

    static defaultProps = {
        type: 'text',
        value: '',
        required: false
    };

    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
    }

    valueChanged({ target: { value: val } }) {
        this.setState({ error: !val && this.props.required });
        this.props.onChange && this.props.onChange(val);
    }

    onBlur({ target: { value: val } }) {
        this.setState({ error: !val && this.props.required });
    }
}

class Input extends InputBase {
    static propTypes = {
        ...InputBase.propTypes,
        value: verifyValueProp
    };

    render() {
        const classNames = ['TextInput--Line', 'bottom-margin--md'];
        if (this.state.error)
            classNames.push('TextInput--error');

        return (
            <input className={classNames.join(' ')}
                type={this.props.type}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.valueChanged.bind(this)}
                onBlur={this.onBlur.bind(this)} />
        );
    }
}

class Area extends InputBase {
    static propTypes = {
        ...InputBase.propTypes,
        value: PropTypes.string
    };

    render() {
        const classNames = ['TextInput--Area', 'bottom-margin--md'];
        if (this.state.error)
            classNames.push('TextInput--error');

        return (
            <textarea className={classNames.join(' ')}
                rows={this.props.lines}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.valueChanged.bind(this)}
                onBlur={this.onBlur.bind(this)} />
        );
    }
}

export default {
    Line: Input,
    Area
};
