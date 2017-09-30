// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import Header from 'components/Header';
import Body from 'components/Body';
import Loader from 'components/Loader';
import NotFound from 'containers/NotFound';
import { cleanTitleRev } from 'utils/cleaning';
import { SHARED_CONSTANTS } from 'utils/constants';

// pulling off required shared constants
const { API_INFO } = SHARED_CONSTANTS;

export default class BlogPost extends Component {
    componentWillMount() {
        const { blogTitle } = this.props.params;
        axios.get(`/api/v${API_INFO.VERSION}/blog/get-post/${blogTitle}`)
            .then(({ data: post }) => {
                this.setState({
                    post,
                    loading: false
                });
            }).catch(err => {
                this.setState({
                    post: null,
                    loading: false
                });
                console.error(err);
            });
    }

    constructor(props) {
        super(props);
        this.state = {
            post: null,
            loading: true
        };
    }

    render() {
        let title = cleanTitleRev(this.props.params.blogTitle);
        let style = (this.state.loading) ? {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        } : {};
        return (
            <div className="BlogPost" style={style}>
                {this.state.loading && <Loader />}
                {!this.state.loading && this.state.post && <div className="BlogPost__Content">
                    <Header title={this.state.post.title}
                        subtitle={this.state.post.subtitle}
                        date={this.state.post.date}
                        authorName={this.state.post.authorname} />
                    <Body content={this.state.post.blogbody} />
                </div>}
                {!this.state.loading && !this.state.post &&
                    <NotFound subtitle={`There\'s no blog post by the name "${title}". Maybe try another post?`}
                        buttonText="Blog"
                        buttonLink="/blog" />}
            </div>
        );
    }
}
