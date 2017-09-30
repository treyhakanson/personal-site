// external modules
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// custom modules
import Header from 'components/Header';
import Body from 'components/Body';
import Loader from 'components/Loader';
import NotFound from 'containers/NotFound';
import { cleanTitleRev } from 'utils/cleaning';
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
                this.setState({
                    project,
                    loading: false
                });
            }).catch(err => {
                this.setState({
                    project: null,
                    loading: false
                });
                console.error(err);
            });
    }

    constructor(props) {
        super(props);
        this.state = {
            project: null,
            loading: true
        };
    }

    render() {
        let title = cleanTitleRev(this.props.params.projectTitle);
        let style = (this.state.loading) ? {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        } : {};
        return (
            <div className="Project" style={style}>
                {this.state.loading && <Loader />}
                {!this.state.loading && this.state.project && <div className="Project__Content">
                    <Header title={this.state.project.title} />
                    <Body content={this.state.project.projectbody} />
                </div>}
                {!this.state.loading && !this.state.project &&
                    <NotFound subtitle={`There\'s no project by the name "${title}". Maybe try another?`}
                        buttonText="Projects"
                        buttonLink="/projects" />}
            </div>
        );
    }
}
