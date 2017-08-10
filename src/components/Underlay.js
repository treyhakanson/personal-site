// external modules
import React, { Component, PropTypes } from 'react';

export default class Underlay extends Component {
    static propTypes = {
        imagePath: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="Underlay" style={{
                backgroundImage: `url(${this.props.imagePath})`
            }} />
        );
    }
}
