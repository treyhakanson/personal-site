// external modules
import React, { Component, PropTypes } from 'react';
import moment from 'moment';

// custom modules
import { SimpleSpacer } from 'components/Spacer';

export default class BlogHeader extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="BlogHeader margin-bottom--md">
                <h1>{this.props.post.title}</h1>
                <h3 className="margin-top--sm">{this.props.post.hook}</h3>
                <p className="margin-top--sm">{moment(this.props.post.date).format('L h:mm a')}&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{this.props.post.authorname}</p>
                <SimpleSpacer.Medium />
            </div>
        );
    }
}
