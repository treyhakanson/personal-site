// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import Header from 'components/Header';
import Body from 'components/Body'
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
                    <Header title={this.state.post.title}
                        subtitle={this.state.post.subtitle}
                        date={this.state.post.date}
                        authorName={this.state.post.authorname} />
                    <Body content={this.state.post.blogbody} />
                </div>}
            </div>
        );
    }
}
