// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import Loader from 'components/Loader';
import { RecommendationCard } from 'components/Recommendation';
import { SimpleSpacer } from 'components/Spacer';
import { Button } from 'components/Button';
import { SHARED_CONSTANTS } from 'utils/constants';

// pull required values off shared constants
const { API_INFO } = SHARED_CONSTANTS;

export default class Recommendations extends Component {
    componentDidMount() {
        axios.get(`/api/v${API_INFO.VERSION}/recommendations/get-top-recommendations/`)
            .then(({ data: recommendations = [] }) => {
                this.setState({ loading: false, error: false, recommendations });
            }).catch(err => {
                this.setState({ loading: false, error: true });
                console.error(err);
            });
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            recommendations: []
        };
    }

    render() {
        return (
            <div className="Recommendations fill--light padding-top--lg padding-right--md padding-bottom--lg padding-left--md">
                <div className="Recommendations__Content">
                    <h2>Recommended</h2>
                    <SimpleSpacer.Medium />
                    {this.state.error && <div className="error"></div>}
                    {this.state.loading && <Loader />}
                    {!this.state.loading && <div className="RecommendationsWrapper">
                        <div className="Recommendations__RecommendationCards">
                            {this.state.recommendations.map(recommendation =>
                                <RecommendationCard key={recommendation.id}
                                    title={recommendation.title}
                                    thumbnail={recommendation.thumbnail}
                                    link={recommendation.link} />
                            )}
                        </div>
                    </div>}
                    <Button.Light className="margin-top--sm"
                        clear
                        text="See More"
                        link="/" />
                </div>
            </div>
        );
    }
}
