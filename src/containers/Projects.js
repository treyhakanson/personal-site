// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import Header from 'components/Header';
import { Button } from 'components/Button';
import { ProjectArchive } from 'components/Project';
import { SimpleSpacer } from 'components/Spacer';
import { SHARED_CONSTANTS } from 'utils/constants';

// pull required values off shared constants
const { API_INFO, PROJECT } = SHARED_CONSTANTS;

export default class Projects extends Component {
    componentDidMount() {
        axios.get(`/api/v${API_INFO.VERSION}/project/posts/`, {
            params: { page: this.state.page }
        }).then(({ data: projects = [] }) => {
            this.setState({
                projects,
                more: projects.length !== 0 && projects.length % PROJECT.PROJECTS_PER_PAGE === 0
            });
        }).catch(err => {
            console.error(err);
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            more: true,
            page: 0,
            projects: []
        };
    }

    retrieveProjects() {
        const page = this.state.page + 1;
        axios.get(`/api/v${API_INFO.VERSION}/project/posts/`, {
            params: { page }
        }).then(({ data: projects }) => {
            this.setState({
                page,
                projects: [...this.state.projects, ...projects],
                more: projects.length !== 0 && projects.length % PROJECT.POSTS_PER_PAGE === 0
            });
        }).catch(err => {
            console.error(err);
        });
    }

    render() {
        console.log(this.state.more);
        return (
            <div className="Projects padding-all--md">
                <Header title="Projects" link="/" />
                {!!this.state.projects.length && <ProjectArchive projects={this.state.projects} />}
                {!!this.state.projects.length &&
                    <Button.Light className="margin-top--md"
                        text={(this.state.more) ? 'More' : 'No More'}
                        disabled={!this.state.more}
                        onClick={this.retrieveProjects.bind(this)} />}
            </div>
        );
    }
}
