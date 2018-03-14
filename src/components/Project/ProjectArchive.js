// external modules
import React, { Component, PropTypes } from "react";

// custom modules
import { ProjectCard } from "components/Project";

export default class ProjectArchive extends Component {
   static propTypes = {
      projects: PropTypes.arrayOf(PropTypes.object).isRequired
   };

   render() {
      return (
         <div className="ProjectArchive__Content handle-float margin-top--lg">
            {this.props.projects.map(project => (
               <ProjectCard
                  key={project.title}
                  title={project.title}
                  image={project.bannerimage}
               />
            ))}
         </div>
      );
   }
}
