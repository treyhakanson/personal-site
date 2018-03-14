// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import { HomePageJumbotron, Portfolio, BlogPosts, Recommendations,
    ContactForm } from 'components/HomePage';
import Underlay from 'components/Underlay';

export default class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <Underlay imagePath="/public/svgs/main-background-image.svg" />
                <HomePageJumbotron />
                <Portfolio />
                <BlogPosts />
                <Recommendations />
                <ContactForm />
            </div>
        );
    }
}
