// external modules
import React, { Component, PropTypes } from "react";

export default class Image extends Component {
   static propTypes = {
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      height: PropTypes.number,
      width: PropTypes.number
   };

   render() {
      return (
         <div
            className="Image"
            style={{ backgroundImage: `url(${this.props.url})` }}
         >
            <img
               className="Image__Dummy"
               src={this.props.url}
               alt={this.props.alt}
            />
         </div>
      );
   }
}
