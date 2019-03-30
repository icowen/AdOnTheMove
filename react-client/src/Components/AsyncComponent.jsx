import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import PropTypes from 'prop-types';

class AsyncComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {getOptions, selected, value} = this.props;
        return (
            <AsyncSelect value={value}
                         onChange={(e) => selected(e)}
                         loadOptions={getOptions}
                         isMulti
                         defaultOptions/>
        )
    }
}

AsyncComponent.propTypes = {
    getOptions: PropTypes.func,
    selected: PropTypes.func,
    value: PropTypes.object
};

export default AsyncComponent;