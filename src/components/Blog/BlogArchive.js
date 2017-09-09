// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import { SimpleSpacer } from 'components/Spacer';
import BlogPostCard from 'components/BlogPostCard';

export default class BlogArchive extends Component {
    static propTypes = {
        posts: PropTypes.arrayOf(PropTypes.object)
    };

    render() {
        return (
            <div className="BlogArchive">
                <h1>Blog Posts</h1>
                <SimpleSpacer.Medium />
                <div className="BlogArchive__Content handle-float margin-top--lg">
                    {this.props.posts.map(post =>
                        <BlogPostCard key={post.id}
                            title={post.title}
                            hook={post.hook}
                            author={post.authorname}
                            image={post.bannerimage}
                            date={post.date}
                            alternate />)}
                </div>
            </div>
        );
    }
}
