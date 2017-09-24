// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import Loader from 'components/Loader';
import BlogPostCard from 'components/BlogPostCard';
import { SimpleSpacer } from 'components/Spacer';
import { SHARED_CONSTANTS } from 'utils/constants';

// pull required values off shared constants
const { API_INFO } = SHARED_CONSTANTS;

export default class BlogPosts extends Component {
    componentDidMount() {
        axios.get(`/api/v${API_INFO.VERSION}/blog/get-top-posts/`)
            .then(({ data: posts = [] }) => {
                this.setState({ loading: false, error: false, posts });
            }).catch(err => {
                this.setState({ loading: false, error: true });
                console.error(err);
            });
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            posts: []
        };
    }

    render() {
        return (
            <div className="BlogPosts fill--light padding-top--lg padding-right--md padding-bottom--lg padding-left--md">
                {this.state.error && <div className="error"></div>}
                {this.state.loading && <Loader />}
                {!this.state.loading && <div className="BlogPostsWrapper">
                    <h2>Blog Posts</h2>
                    <SimpleSpacer.Medium />
                    <div className="BlogPosts__BlogPostCards">
                        {this.state.posts.map(post =>
                            <BlogPostCard key={post.id}
                                title={post.title}
                                hook={post.hook}
                                author={post.authorname}
                                image={post.bannerimage}
                                date={post.date} />
                        )}
                    </div>
                </div>}
            </div>
        );
    }
}
