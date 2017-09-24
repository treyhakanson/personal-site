// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import Header from 'components/Header';
import Body from 'components/Body';
import { SHARED_CONSTANTS } from 'utils/constants';

// pulling off required shared constants
const { API_INFO } = SHARED_CONSTANTS;

// NOTE: should be pretty similar to `BlogPost` component

export default class Project extends Component {
    static propTypes = {};

    componentWillMount() {
        const { projectTitle } = this.props.params;
        axios.get(`/api/v${API_INFO.VERSION}/project/get-project/${projectTitle}`)
            .then(({ data: project }) => {
                this.setState({ project });
            }).catch(err => {
                console.error(err);
            });
    }

    constructor(props) {
        super(props);
        this.state = {
            project: null
        };
    }

    render() {
        return (
            <div className="Project">
                {this.state.project && <div className="Project__Content">
                    <Header title={this.state.project.title} />
                    <Body content={this.state.project.projectbody} />
                </div>}
            </div>
        );
    }
}
