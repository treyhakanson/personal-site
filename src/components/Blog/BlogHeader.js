// external modules
import React, { Component, PropTypes } from 'react';
import moment from 'moment';

// custom modules
import { SimpleSpacer } from 'components/Spacer';
import BackArrow from 'assets/svgs/down-arrow.svg';

export default class BlogHeader extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    static propTypes = {
        post: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="BlogHeader margin-bottom--md">
                <div className="BlogHeader__Back margin-bottom--sm hover--basic"
                    onClick={this.context.router.goBack}>
                    <BackArrow width={35} height={35} />
                </div>
                <h1>{this.props.post.title}</h1>
                <h3 className="margin-top--sm margin-bottom--sm">{this.props.post.hook}</h3>
                <p>
                    {moment(this.props.post.date).format('L h:mm a')}   //   {this.props.post.authorname}
                </p>
                <SimpleSpacer.Medium />
            </div>
        );
    }
}
