// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import { BlogHeader, BlogBody } from 'components/Blog';
import { SHARED_CONSTANTS } from 'utils/constants';

// pulling off required shared constants
const { API_INFO } = SHARED_CONSTANTS;

// TODO update status/content based on request

export default class BlogPost extends Component {
    componentWillMount() {
        const { blogTitle } = this.props.params;
        axios.get(`/api/v${API_INFO.VERSION}/blog/get-post/${blogTitle}`)
            .then(({ data: post }) => {
                this.setState({ post });
            }).catch(err => {
                console.error(err);
            });
    }

    constructor(props) {
        super(props);
        this.state = {
            post: null
        };
    }

    render() {
        return (
            <div className="BlogPost">
                {this.state.post && <div className="BlogPost__Content">
                    <BlogHeader post={this.state.post} />
                    <BlogBody post={this.state.post} />
                </div>}
            </div>
        );
    }
}
