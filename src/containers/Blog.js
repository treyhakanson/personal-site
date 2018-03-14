// external modules
import React, { Component, PropTypes } from "react";
import axios from "axios";

// custom modules
import Header from "components/Header";
import { Button } from "components/Button";
import { BlogArchive } from "components/Blog";
import { SHARED_CONSTANTS } from "utils/constants";

// pull required values off shared constants
const { API_INFO, BLOG } = SHARED_CONSTANTS;

export default class Blog extends Component {
   componentDidMount() {
      axios
         .get(`/api/v${API_INFO.VERSION}/blog/posts/`, {
            params: { page: this.state.page }
         })
         .then(({ data: posts }) => {
            this.setState({
               posts,
               more:
                  posts.length !== 0 && posts.length % BLOG.POSTS_PER_PAGE === 0
            });
         })
         .catch(err => {
            console.error(err);
         });
   }

   constructor(props) {
      super(props);
      this.state = {
         more: true,
         page: 0,
         posts: []
      };
   }

   retrievePosts() {
      const page = this.state.page + 1;
      axios
         .get(`/api/v${API_INFO.VERSION}/blog/posts/`, {
            params: { page }
         })
         .then(({ data: posts }) => {
            this.setState({
               page,
               posts: [...this.state.posts, ...posts],
               more:
                  posts.length !== 0 && posts.length % BLOG.POSTS_PER_PAGE === 0
            });
         })
         .catch(err => {
            console.error(err);
         });
   }

   render() {
      return (
         <div className="Blog padding-all--md">
            <Header title="Blog Posts" link="/" />
            {!!this.state.posts.length && (
               <BlogArchive posts={this.state.posts} />
            )}
            {!!this.state.posts.length && (
               <Button.Light
                  className="margin-top--md"
                  text={this.state.more ? "More" : "No More"}
                  disabled={!this.state.more}
                  onClick={this.retrievePosts.bind(this)}
               />
            )}
         </div>
      );
   }
}
