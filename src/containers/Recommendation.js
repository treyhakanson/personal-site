// external modules
import React, { Component, PropTypes } from "react";
import axios from "axios";

// custom modules
import Header from "components/Header";
import { Button } from "components/Button";
import { RecommendationArchive } from "components/Recommendation";
import { SHARED_CONSTANTS } from "utils/constants";

// pull required values off shared constants
const { API_INFO, RECOMMENDATION } = SHARED_CONSTANTS;

export default class Blog extends Component {
   componentDidMount() {
      axios
         .get(`/api/v${API_INFO.VERSION}/recommendations/`, {
            params: { page: this.state.page }
         })
         .then(({ data: recommendations }) => {
            this.setState({
               recommendations,
               more:
                  recommendations.length !== 0 &&
                  recommendations.length %
                     RECOMMENDATION.RECOMMENDATIONS_PER_PAGE ===
                     0
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
         recommendations: []
      };
   }

   retrieveRecommendations() {
      const page = this.state.page + 1;
      axios
         .get(`/api/v${API_INFO.VERSION}/recommendations/`, {
            params: { page }
         })
         .then(({ data: recommendations }) => {
            this.setState({
               page,
               recommendations: [
                  ...this.state.recommendations,
                  ...recommendations
               ],
               more:
                  recommendations.length !== 0 &&
                  recommendations.length %
                     RECOMMENDATION.RECOMMENDATIONS_PER_PAGE ===
                     0
            });
         })
         .catch(err => {
            console.error(err);
         });
   }

   render() {
      return (
         <div className="Recommendation padding-all--md">
            <Header title="Recommended" link="/" ellipsisOverflow />
            {!!this.state.recommendations.length && (
               <RecommendationArchive
                  recommendations={this.state.recommendations}
               />
            )}
            {!!this.state.recommendations.length && (
               <Button.Light
                  className="margin-top--md"
                  text={this.state.more ? "More" : "No More"}
                  disabled={!this.state.more}
                  onClick={this.retrieveRecommendations.bind(this)}
               />
            )}
         </div>
      );
   }
}
