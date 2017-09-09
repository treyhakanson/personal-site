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
        author: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="BlogPostCard align-content--center--col fill--light padding-all--sm">
                <h3>{this.props.title}</h3>
                <SimpleSpacer.Short spacing="sm" />
                <p>{this.props.hook}</p>
                <Button.Border className="margin-top--sm"
                    text="Read More"
                    link={`/blog/${this.props.title.replace(' ', '-').toLowerCase()}`} />
            </div>
        );
    }
}
