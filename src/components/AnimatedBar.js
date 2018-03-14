// external modules
import React, { Component, PropTypes } from "react";

// custom modules
import { SimpleSpacer } from "components/Spacer";
import { buildGetClassName } from "utils/class-names";

export default class AnimatedBar extends Component {
   static propTypes = {
      fill: PropTypes.number.isRequired,
      speed: PropTypes.number,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      className: PropTypes.string
   };

   constructor(props) {
      super(props);
      this.getClassName = buildGetClassName("AnimatedBar");
   }

   componentDidMount() {
      const { fill, speed = 500 } = this.props;

      setTimeout(() => {
         this.fillEl.style.width = `${fill}%`;
         this.fillEl.style.transitionDuration = `${speed}ms`;
      }, 0);
   }

   render() {
      return (
         <div className="AnimatedBar__Wrapper">
            {this.props.title && (
               <h4 className="AnimatedBar__Title">{this.props.title}</h4>
            )}
            {this.props.title &&
               this.props.subtitle && <SimpleSpacer.Short spacing="sm" />}
            {this.props.subtitle && (
               <p className="AnimatedBar__Subtitle">{this.props.subtitle}</p>
            )}
            <div className={this.getClassName("margin-top--xs")}>
               <div className="AnimatedBar__FillWrapper">
                  <div
                     className="FillWrapper__Fill"
                     ref={el => {
                        this.fillEl = el;
                     }}
                  />
               </div>
               <div className="AnimatedBar_Shadow" />
            </div>
         </div>
      );
   }
}
