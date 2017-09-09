// external modules
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

// custom modules
import { SimpleSpacer } from 'components/Spacer';
import BackArrow from 'assets/svgs/down-arrow.svg';

export default class BlogHeader extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="BlogHeader margin-bottom--md">
                <Link className="no-underline" to="/blog">
                    <div className="BlogHeader__Back margin-bottom--sm">
                        <BackArrow width={35} height={35} />
                    </div>
                </Link>
                <h1>{this.props.post.title}</h1>
                <h3 className="margin-top--sm margin-bottom--sm">{this.props.post.hook}</h3>
                <p>{moment(this.props.post.date).format('L h:mm a')}&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{this.props.post.authorname}</p>
                <SimpleSpacer.Medium />
            </div>
        );
    }
}
