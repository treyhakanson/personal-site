// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import Scroller from 'components/Scroller';
import HomePageJumbotron from 'components/HomePage/HomePageJumbotron';
import Portfolio from 'components/HomePage/Portfolio';
import Underlay from 'components/Underlay';

export default class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <Underlay imagePath="/public/svgs/main-background-image.svg" />
                <HomePageJumbotron />
                <Portfolio />
                <Scroller to="top" />
            </div>
        );
    }
}
