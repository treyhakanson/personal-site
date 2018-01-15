// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import Loader from 'components/Loader';
import { ProjectCard } from 'components/Project';
import { Button } from 'components/Button';
import { SimpleSpacer } from 'components/Spacer';
import { SHARED_CONSTANTS } from 'utils/constants';

// pull required values off shared constants
const { API_INFO } = SHARED_CONSTANTS;

export default class Portfolio extends Component {
    componentWillMount() {
        axios.get(`/api/v${API_INFO.VERSION}/project/get-top-projects/`)
            .then(({ data: projects = [] }) => {
                this.setState({ loading: false, error: false, projects });
            }).catch(err => {
                this.setState({ loading: false, error: true });
                console.error(err);
            });
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            projects: []
        };
    }

    render() {
        return (
            <div className="Portfolio fill--light padding-all--md">
                <div className="Portfolio__Content">
                    <h2>About Me</h2>
                    <SimpleSpacer.Medium />
                    <p>
                        Hi, I&apos;m Trey Hakanson, its nice to meet you.
                        I&apos;m a full-stack developer and UI/UX designer based
                        in Columbus Ohio. To learn more about me and what I do,
                        check out some of these projects or my blog.
                    </p>
                    {this.state.error && <div className="error"></div>}
                    {this.state.loading && <Loader />}
                    {!this.state.loading && <div className="Portfolio__Projects margin-top--sm">
                        {this.state.projects.map(project =>
                            <ProjectCard key={project.id}
                                title={project.title}
                                image={project.bannerimage} />
                        )}
                    </div>}
                    <Button.Light className="margin-top--sm"
                        text="See More"
                        link="/projects" />
                </div>
            </div>
        );
    }
}
