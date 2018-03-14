// external modules
import React, { Component, PropTypes } from "react";

// custom modules
import { ELEMENT_TYPES } from "utils/constants";
import Header from "components/Header";
import Code from "components/Code";
import Image from "components/Image";
import Youtube from "components/Youtube";

export default class Body extends Component {
   static propTypes = {
      content: PropTypes.array.isRequired
   };

   parseBodyElement(element) {
      switch (element.type) {
         case ELEMENT_TYPES.TEXT:
            return <p>{element.content}</p>;
         case ELEMENT_TYPES.SUBHEADING:
            return <h3>{element.content}</h3>;
         case ELEMENT_TYPES.LINK:
            console.log(element.link);
            return (
               <a href={element.link}>
                  <p>{element.content}</p>
               </a>
            );
         case ELEMENT_TYPES.IMAGE:
            return (
               <Image
                  url={element.url}
                  alt={element.alt}
                  height={element.height}
                  width={element.width}
               />
            );
         case ELEMENT_TYPES.CODE:
            return <Code code={element.content} />;
         case ELEMENT_TYPES.QUOTE:
            return <div className="quote" />;
         case ELEMENT_TYPES.YOUTUBE:
            return <Youtube videoId={element.id} />;
         case ELEMENT_TYPES.LIST:
            return (
               <ol>
                  {element.items.map((item, i) => <li key={i}>{item}</li>)}
               </ol>
            );
      }
   }

   render() {
      return (
         <div className="BlogBody">
            <div className="BlogBody__Content">
               {this.props.content.map((el, i) => {
                  return (
                     <div key={i} className="margin-bottom--md">
                        {this.parseBodyElement(el)}
                     </div>
                  );
               })}
            </div>
         </div>
      );
   }
}
