// external modules
import React, { Component, PropTypes } from 'react';

class ButtonBase extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        className: PropTypes.string,
        onClick: PropTypes.func
    };

    getClassName(className) {
        const classNames = ['ButtonBase'];
        if (className)
            classNames.push(className);
        if (this.props.className)
            classNames.push(this.props.className);
        return classNames.join(' ');
    }
}

class ModernButton extends ButtonBase {
    render() {
        return (
            <div className={this.getClassName('ModernButton')}
                onClick={this.props.onClick}>
                <div className="ModernButton__Upper">{this.props.text}</div>
                <div className="ModernButton__Shadow"></div>
            </div>
        );
    }
}

class FillButton extends ButtonBase {
    render() {
        return (
            <div className={this.getClassName('FillButton')}
                onClick={this.props.onClick}>{this.props.text}</div>
        );
    }
}

class LightFillButton extends ButtonBase {
    render() {
        return (
            <div className={this.getClassName('LightFillButton')}
                onClick={this.props.onClick}>{this.props.text}</div>
        );
    }
}

class BorderButton extends ButtonBase {
    render() {
        return (
            <div className={this.getClassName('BorderButton')}
                onClick={this.props.onClick}>{this.props.text}</div>
        );
    }
}

export default {
    Modern: ModernButton,
    Border: BorderButton,
    Fill: FillButton,
    LightFill: LightFillButton
};
