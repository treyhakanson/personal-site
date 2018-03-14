// external modules
import React, { Component, PropTypes } from "react";
import moment from "moment";
import { Link } from "react-router";

// custom modules
import { Button } from "components/Button";

export default class RecommendationCard extends Component {
   static propTypes = {
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired
   };

   render() {
      return (
         <a
            className="RecommendationCard no-underline display--block"
            href={this.props.link}
            target="_blank"
            rel="nofollow"
         >
            <div
               className="RecommendationCard__Thumbnail"
               style={{ backgroundImage: `url(${this.props.thumbnail})` }}
            />
            <p className="RecommendationCard__Title">{this.props.title}</p>
         </a>
      );
   }
}
