// external modules
import React, { Component, PropTypes } from "react";
import { Link } from "react-router";

// custom modules
import HomeIcon from "assets/svgs/home-icon.svg";

export default class HomeButton extends Component {
   render() {
      return (
         <Link className="no-underline" to="/">
            <div className="HomeButton">
               <HomeIcon height={35} width={35} />
            </div>
         </Link>
      );
   }
}
