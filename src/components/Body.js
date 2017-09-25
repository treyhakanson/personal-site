// external modules
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// custom modules
import { ELEMENT_TYPES } from 'utils/constants';
import Code from 'components/Code';
import Image from 'components/Image';

export default class Body extends Component {
    static propTypes = {
        content: PropTypes.array.isRequired
    };

    parseBodyElement(element) {
        switch(element.type) {
            case ELEMENT_TYPES.TEXT:
                return <p>{element.content}</p>;
            case ELEMENT_TYPES.LINK:
                return <Link to={element.link}>{element.content}</Link>;
            case ELEMENT_TYPES.IMAGE:
                return <Image url={element.url}
                    alt={element.alt}
                    height={element.height}
                    width={element.width} />;
            case ELEMENT_TYPES.CODE:
                return <Code code={element.content}/>
            case ELEMENT_TYPES.QUOTE:
                return <div className="quote" />
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
                        )
                    })}
                </div>
            </div>
        );
    }
}
