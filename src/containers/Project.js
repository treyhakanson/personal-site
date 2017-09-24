// external modules
import React, { Component, PropTypes } from 'react';

// NOTE: should be pretty similar to `BlogPost` component
export default class Project extends Component {
    static propTypes = {};

    render() {
        return (
            <div className="Project">
                {this.props.params.projectTitle}
            </div>
        );
    }
}
