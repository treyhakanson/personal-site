// external modules
import React, { Component, PropTypes } from "react";

const Dot = () => (
   <div className="Loader__Dot">
      <div className="Dot__Main" />
      <div className="Dot__Shadow" />
   </div>
);

export default class Loader extends Component {
   static propTypes = {};

   render() {
      return (
         <div className="Loader margin-bottom--sm margin-top--sm">
            <Dot />
            <Dot />
            <Dot />
            <Dot />
         </div>
      );
   }
}
