// external modules
import React, { Component, PropTypes } from 'react';

export default class Loader extends Component {
    static propTypes = {};

    render() {
        return (
            <div className="Loader margin-bottom--sm margin-top--sm">
                <p>Loading...</p>
            </div>
        );
    }
}
