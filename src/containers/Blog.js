// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import HomeButton from 'components/HomeButton';
import { BlogArchive } from 'components/Blog';
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
                {!!this.state.posts.length && <BlogArchive posts={this.state.posts} />}
                <HomeButton />
            </div>
        );
    }
}
