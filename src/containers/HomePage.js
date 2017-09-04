// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import Footer from 'components/Footer';
import { HomePageJumbotron, Portfolio, ContactForm } from 'components/HomePage';
import Scroller from 'components/Scroller';
import Underlay from 'components/Underlay';

export default class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <Underlay imagePath="/public/svgs/main-background-image.svg" />
                <HomePageJumbotron />
                <ContactForm />
                {/* <Portfolio /> */}
                {/* <Scroller to="top" /> */}
                <Footer />
            </div>
        );
    }
}
