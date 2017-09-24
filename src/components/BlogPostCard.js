// external modules
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { Link } from 'react-router';

// custom modules
import { Button } from 'components/Button';

export default class BlogPostCard extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        hook: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        alternate: PropTypes.bool.isRequired
    };

    static defaultProps = {
        alternate: false
    };

    render() {
        const classNames = ['BlogPostCard', 'align-content--center--col', 'fill--light'];
        if (this.props.alternate)
            classNames[0] = classNames[0] + '--alt';
        return (
            <div className={classNames.join(' ')}>
                <Link className="no-underline margin-bottom--xs"
                    to={`/blog/${this.props.title.replace(/\ /g, '-').toLowerCase()}`}>
                    <h3>{this.props.title}</h3>
                </Link>
                <p className="margin-bottom--xs font-color--light">
                    {moment(this.props.date).format('L h:mm a')}
                </p>
                <p>{this.props.hook}</p>
            </div>
        );
    }
}
