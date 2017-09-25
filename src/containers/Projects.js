// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import Header from 'components/Header';
import { SimpleSpacer } from 'components/Spacer';
import ProjectCard from 'components/ProjectCard';
import { SHARED_CONSTANTS } from 'utils/constants';

// pull required values off shared constants
const { API_INFO } = SHARED_CONSTANTS;

export default class Projects extends Component {
    componentDidMount() {
        axios.get(`/api/v${API_INFO.VERSION}/project/get-projects/`, {
            page: this.state.page
        }).then(({ data: projects = [] }) => {
            this.setState({ projects });
        }).catch(err => {
            console.error(err);
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            projects: []
        };
    }

    render() {
        return (
            <div className="Projects padding-all--md">
                <Header title="Projects" />
                <div className="ProjectArchive__Content handle-float margin-top--lg">
                    {this.state.projects.map(project =>
                        <ProjectCard key={project.title}
                            title={project.title}
                            image={project.bannerimage} />
                    )}
                </div>
            </div>
        );
    }
}
