// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import DownArrow from 'assets/svgs/down-arrow.svg';
import { validateFromObject } from 'utils/proptype-validations';
import { SCROLLER_DIRECTION } from 'utils/constants';

export default class Scroller extends Component {
    static propTypes = {
        to: validateFromObject(SCROLLER_DIRECTION),
        amount: PropTypes.number
    };

    getIcon() {
        const iconProps = {
            className: 'Scroller__Icon',
            width: 50,
            height: 50
        };
        switch (this.props.to) {
            case SCROLLER_DIRECTION.TOP:
                return <DownArrow {...iconProps} />;
            case SCROLLER_DIRECTION.BOTTOM:
                return <DownArrow {...iconProps} />;
        }
    }

    activateScroller() {
        
    }

    render() {
        return (
            <div className="Scroller"
                onClick={this.activateScroller.bind(this)}>
                {this.getIcon()}
            </div>
        );
    }
}
