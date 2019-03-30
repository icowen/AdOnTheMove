import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ParameterContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'section-container'}>
                <div className={'section-header'}>{this.props.name}</div>
                <div className={'section-content'}>{this.props.component}</div>
            </div>
        )
    }
}

ParameterContainer.propTypes = {
    component: PropTypes.object,
    name: PropTypes.string
};

export default ParameterContainer;