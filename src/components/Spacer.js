// external modules
import React, { Component, PropTypes } from 'react';

// TODO: create more complex and ornate spacer options

class SpacerBase extends Component {
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

// simple spacer exports
export const SimpleSpacer = {
    Short: SimpleSpacerShort,
    Medium: SimpleSpacerMedium,
    Long: SimpleSpacerLong
};
