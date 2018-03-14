// external modules
import React, { Component, PropTypes } from "react";

// custom modules
import { SimpleSpacer } from "components/Spacer";
import { Button } from "components/Button";

export default class NotFound extends Component {
   static propTypes = {
      header: PropTypes.string,
      subtitle: PropTypes.string,
      buttonText: PropTypes.string,
      buttonLink: PropTypes.string
   };

   render() {
      return (
         <div className="NotFound text-center">
            <h1>{this.props.header || "Nothing Here."}</h1>
            <SimpleSpacer.Long />
            <h3>{this.props.subtitle || "Maybe go back to the homepage?"}</h3>
            <Button.Modern
               className="margin-top--sm"
               text={this.props.buttonText || "Home"}
               link={this.props.buttonLink || "/"}
            />
         </div>
      );
   }
}
