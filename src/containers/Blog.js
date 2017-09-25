// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import { BlogArchive } from 'components/Blog';
import Header from 'components/Header';
import { SHARED_CONSTANTS } from 'utils/constants';

// pull required values off shared constants
const { API_INFO } = SHARED_CONSTANTS;

export default class Blog extends Component {
    componentDidMount() {
        axios.get(`/api/v${API_INFO.VERSION}/blog/posts/`, {
            page: this.state.page
        }).then(({ data: posts }) => {
            this.setState({ posts });
        }).catch(err => {
            console.error(err);
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            posts: []
        };
    }

    render() {
        return (
            <div className="Blog padding-all--md">
                <Header title="Blog Posts" />
                {!!this.state.posts.length && <BlogArchive posts={this.state.posts} />}
            </div>
        );
    }
}
