// external modules
import React, { Component, PropTypes } from 'react';

// custom modules
import HomePageJumbotron from 'components/HomePage/HomePageJumbotron';

export default class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <HomePageJumbotron />
            </div>
        );
    }
}
