// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import { SPACER_MARGIN } from 'utils/constants';

// TODO: create more complex and ornate spacer options

class SpacerBase extends Component {
    static propTypes = {
        light: PropTypes.bool,
        spacing: (props, propName, componentName) => {
            if (!SPACER_MARGIN[props.spacing]) {
                return new Error(
                    `Invalid prop \`${propName}\` supplied to ` +
                    `\`${componentName}\`. Must be one of: ` +
                    Object.values(SPACER_MARGIN).map(v => v).join(', ')
                );
            }
        }
    };

    /**
     * getClassName - meant to be override in subclasses; should return the
     * desired className
     *
     * @return {string}  the className of the spacer
     */
    getClassName(className) {
        const classNames = ['SpacerBase'];
        if (this.props.className)
            classNames.push(this.props.className);
        if (this.props.light)
            classNames.push('background-color--primary-color--fade');
        if (this.props.spacing)
            classNames.push(`top-margin--${this.props.spacing} bottom-margin--${this.props.spacing}`);
        if (className)
            classNames.push(className);

        return classNames.join(' ');
    }

    render() {
        return (
            <hr className={this.getClassName()} />
        );
    }
}

class SimpleSpacerShort extends SpacerBase {
    getClassName() {
        return super.getClassName('SimpleSpacer--short');
    }
}

class SimpleSpacerMedium extends SpacerBase {
    getClassName() {
        return super.getClassName('SimpleSpacer--medium');
    }
}

class SimpleSpacerLong extends SpacerBase {
    getClassName() {
        return super.getClassName('SimpleSpacer--long');
    }
}

class SimpleSpacerCenter extends SpacerBase {
    getClassName() {
        return super.getClassName('SimpleSpacer--center');
    }
}

// simple spacer exports
export const SimpleSpacer = {
    Short: SimpleSpacerShort,
    Medium: SimpleSpacerMedium,
    Long: SimpleSpacerLong,
    Center: SimpleSpacerCenter
};
