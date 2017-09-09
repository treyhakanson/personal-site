// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import { Button } from 'components/Button';
import { SimpleSpacer } from 'components/Spacer';

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
        const classNames = ['BlogPostCard', 'align-content--center--col', 'fill--light', 'padding-all--sm'];
        if (this.props.alternate)
            classNames[0] = classNames[0] + '--alt';
        return (
            <div className={classNames.join(' ')}>
                <h3>{this.props.title}</h3>
                <SimpleSpacer.Short spacing="sm" />
                <p>{this.props.hook}</p>
                <Button.Border className="margin-top--sm"
                    text="Read More"
                    link={`/blog/${this.props.title.replace(/\ /g, '-').toLowerCase()}`} />
            </div>
        );
    }
}
