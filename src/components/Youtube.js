// external modules
import React, { Component, PropTypes } from 'react';

export default class Youtube extends Component {
    static propTypes = {
        videoId: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="Youtube">
                <iframe className="Youtube__Video"
                    src={`https://www.youtube.com/embed/${this.props.videoId}?rel=0&hd=1`}
                    frameBorder={0}
                    allowFullScreen />
            </div>
        );
    }
}
