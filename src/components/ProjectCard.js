// external modules
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// custom modules
import { cleanTitle } from 'utils/cleaning';

export default class ProjectCard extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    };

    componentDidMount() {
        const { width } = ReactDOM.findDOMNode(this.projectCard).getBoundingClientRect();
        this.setState({ height: width });
    }

    constructor(props) {
        super(props);
        this.state = {
            height: 0
        };
    }

    render() {
        return (
            <Link className="ProjectCard no-underline"
                to={`/project/${cleanTitle(this.props.title)}`}
                ref={projectCard => { this.projectCard = projectCard }}
                style={{ height: this.state.height }}>
                <div className="ProjectCard__Image" style={{ backgroundImage: `url(${this.props.image})` }}>
                    <div className="ProjectCard__Title">
                        <h4 className="font-color--light">{this.props.title}</h4>
                    </div>
                </div>
            </Link>
        );
    }
}
