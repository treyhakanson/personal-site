// external modules
import React, { Component, PropTypes } from "react";

// custom modules
import { SimpleSpacer } from "components/Spacer";
import { RecommendationCard } from "components/Recommendation";

export default class RecommendationArchive extends Component {
   static propTypes = {
      posts: PropTypes.arrayOf(PropTypes.object)
   };

   buildContent() {
      let blocks = [];

      for (let i = 0; i < this.props.recommendations.length; i += 4) {
         blocks.push(
            <div className="RecommendationBlock" key={i}>
               {this.props.recommendations
                  .slice(i, i + 4)
                  .map(recommendation => (
                     <RecommendationCard
                        key={recommendation.id}
                        title={recommendation.title}
                        link={recommendation.link}
                        thumbnail={recommendation.thumbnail}
                     />
                  ))}
            </div>
         );
      }

      return (
         <div className="RecommendationArchive__Content handle-float margin-top--lg">
            {blocks}
         </div>
      );
   }

   render() {
      return <div className="RecommendationArchive">{this.buildContent()}</div>;
   }
}
