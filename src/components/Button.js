// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import { buildGetClassName } from 'utils/classNames';

// Button
class ButtonBase extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        className: PropTypes.string,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.getClassName = buildGetClassName('ButtonBase');
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

export const Button = {
    Modern: ModernButton,
    Border: BorderButton,
    Fill: FillButton,
    LightFill: LightFillButton
};

// IconButton
export class IconButton extends ButtonBase {
    static propTypes = {
        icon: PropTypes.element.isRequired,
        className: PropTypes.string,
        onClick: PropTypes.func
    }

    render() {
        return (
            <div className={this.getClassName(['IconButton', 'ModernButton'])}
                onClick={this.props.onClick}>
                <div className="ModernButton__Upper">
                    {React.cloneElement(this.props.icon, {
                        className: 'IconButton__Icon'
                    })}
                </div>
                <div className="ModernButton__Shadow"></div>
            </div>
        );
    }
}
