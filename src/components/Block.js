// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import ErrorIcon from 'assets/svgs/error-icon.svg';
import SuccessIcon from 'assets/svgs/success-icon.svg';

class Block extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    };

    /// abstract method to override; returns the icon for the block
    getIcon() {
        return <noscript />;
    }

    /// abstract method to override; returns the content
    getContent() {
        return <noscript />;
    }

    /// absrtact method to override; returns the type
    getType() {
        return '';
    }

    render() {
        const className = [`Block--${this.getType()}`, 'margin-bottom--sm'];
        return (
            <div className={className.join(' ')}>
                {this.getIcon()}
                {this.getContent()}
            </div>
        );
    }
}

export class ErrorBlock extends Block {
    getIcon() {
        return <ErrorIcon height={35} width={35} />;
    }

    getContent() {
        return <p className="margin-left--xs font-color--error">{this.props.text}</p>;
    }

    getType() {
        return 'error';
    }
}

export class SuccessBlock extends Block {
    getIcon() {
        return <SuccessIcon height={35} width={35} />;
    }

    getContent() {
        return <p className="margin-left--xs font-color--success">{this.props.text}</p>;
    }

    getType() {
        return 'success';
    }
}
