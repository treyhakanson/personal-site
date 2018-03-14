// external modules
import React, { Component, PropTypes } from "react";
import moment from "moment";
import { Link } from "react-router";

// custom modules
import { Button } from "components/Button";
import { cleanTitle } from "utils/cleaning";

export default class BlogPostCard extends Component {
   static propTypes = {
      title: PropTypes.string.isRequired,
      hook: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      alternate: PropTypes.bool.isRequired
   };

   static defaultProps = {
      alternate: false
   };

   render() {
      const classNames = [
         "BlogPostCard",
         "align-content--left--col",
         "fill--light",
         "no-underline"
      ];
      if (this.props.alternate) classNames[0] = classNames[0] + "--alt";
      return (
         <Link
            className={classNames.join(" ")}
            to={`/blog/${cleanTitle(this.props.title)}`}
         >
            <h3 className="margin-bottom--xs">{this.props.title}</h3>
            <p className="margin-bottom--xs font-color--fade">
               {moment(this.props.date).format("L h:mm a")}
            </p>
            <p className="margin-top--xs">{this.props.hook}</p>
         </Link>
      );
   }
}
