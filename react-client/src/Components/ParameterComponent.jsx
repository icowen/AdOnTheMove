import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import PropTypes from 'prop-types';

class ParameterComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {getOptions, name, selected, value} = this.props;
        return (
            <div className={'section-container'}>
                <div className={'section-header'}>{name}</div>
                <div className={'section-content'}>
                    <AsyncSelect value={value}
                                 onChange={(e) => selected(e)}
                                 loadOptions={getOptions}
                                 isMulti
                                 defaultOptions/>
                </div>
            </div>
        )
    }
}

ParameterComponent.propTypes = {
    getOptions: PropTypes.func,
    name: PropTypes.string,
    selected: PropTypes.func,
    value: PropTypes.object
};

export default ParameterComponent;