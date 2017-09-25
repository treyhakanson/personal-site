// external modules
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// custom modules
import { buildGetClassName } from 'utils/class-names';

// Button
class ButtonBase extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        center: PropTypes.bool.isRequired,
        disabled: PropTypes.bool.isRequired,
        clear: PropTypes.bool.isRequired,
        className: PropTypes.string,
        onClick: PropTypes.func,
        link: PropTypes.string
    };

    static defaultProps = {
        clear: false,
        center: false,
        disabled: false
    };

    wrapContent(content) {
        if (this.props.link) {
            let classNames = ['no-underline'];
            if (this.props.clear)
                classNames.push('display--block');
            return (
                <Link className={classNames.join(' ')}
                    to={this.props.link}>
                    {content}
                </Link>
            );
        } else {
            return content;
        }
    }

    onClick() {
        !this.props.disabled && this.props.onClick && this.props.onClick();
    }

    constructor(props) {
        super(props);
        let baseClassName = 'ButtonBase';
        if (props.center)
            baseClassName += '--center';
        let classNames = [baseClassName];
        if (props.clear && !props.link)
            classNames.push('display--block');
        if (props.className)
            classNames.push(props.className);
        this.getClassName = buildGetClassName(classNames.join(' '));
    }
}

class ModernButton extends ButtonBase {
    render() {
        return this.wrapContent(
            <div className={this.getClassName('ModernButton')}
                onClick={this.onClick.bind(this)}>
                <div className="ModernButton__Upper">{this.props.text}</div>
                <div className="ModernButton__Shadow"></div>
            </div>
        );
    }
}

class DarkFillButton extends ButtonBase {
    render() {
        return this.wrapContent(
            <div className={this.getClassName('FillButton--dark')}
                onClick={this.onClick.bind(this)}>{this.props.text}</div>
        );
    }
}

class MediumFillButton extends ButtonBase {
    render() {
        return this.wrapContent(
            <div className={this.getClassName('FillButton--medium')}
                onClick={this.onClick.bind(this)}>{this.props.text}</div>
        );
    }
}

class LightFillButton extends ButtonBase {
    render() {
        return this.wrapContent(
            <div className={this.getClassName('FillButton--light')}
                onClick={this.onClick.bind(this)}>{this.props.text}</div>
        );
    }
}

class BorderButton extends ButtonBase {
    render() {
        return this.wrapContent(
            <div className={this.getClassName('BorderButton')}
                onClick={this.onClick.bind(this)}>{this.props.text}</div>
        );
    }
}

export const Button = {
    Modern: ModernButton,
    Border: BorderButton,
    Dark: DarkFillButton,
    Medium: MediumFillButton,
    Light: LightFillButton
};

// IconButton
export class IconButton extends ButtonBase {
    static propTypes = {
        icon: PropTypes.element.isRequired,
        className: PropTypes.string,
        onClick: PropTypes.func
    }

    render() {
        return this.wrapContent(
            <div className={this.getClassName(['IconButton', 'ModernButton'])}
                onClick={this.onClick.bind(this)}>
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
