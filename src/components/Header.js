// external modules
import React, { Component, PropTypes } from "react";
import moment from "moment";

// custom modules
import { SimpleSpacer } from "components/Spacer";
import BackArrow from "assets/svgs/down-arrow.svg";

export default class Header extends Component {
   static contextTypes = {
      router: PropTypes.object.isRequired
   };

   static propTypes = {
      ellipsisOverflow: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      date: PropTypes.string,
      authorName: PropTypes.string
   };

   static defaultProps = {
      ellipsisOverflow: false
   };

   navigate() {
      if (this.props.link) this.context.router.push(this.props.link);
      else this.context.router.goBack();
   }

   render() {
      return (
         <div className="Header margin-bottom--md">
            <div
               className="Header__Back margin-bottom--sm hover--basic"
               onClick={this.navigate.bind(this)}
            >
               <BackArrow width={35} height={35} />
            </div>
            <h1
               className={
                  this.props.ellipsisOverflow ? "ellipsis-overflow" : ""
               }
            >
               {this.props.title}
            </h1>
            {this.props.subtitle && (
               <h3 className="margin-top--sm margin-bottom--sm">
                  {this.props.subtitle}
               </h3>
            )}
            <p className="font-color--fade">
               {this.props.date && (
                  <span>{moment(this.props.date).format("L h:mm a")}</span>
               )}
               {this.props.date && this.props.authorName && <span> // </span>}
               {this.props.authorName && <span>{this.props.authorName}</span>}
            </p>
            <SimpleSpacer.Medium />
         </div>
      );
   }
}
