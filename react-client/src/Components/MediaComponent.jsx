import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import PropTypes from 'prop-types';

class MediaComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'section-container'}>
                <div className={'section-header'}>{"Media"}</div>
                <div className={'section-content'}>
                    <AsyncSelect value={this.props.selected}
                                 onChange={(e) => this.props.selectedMedia(e)}
                                 loadOptions={this.props.getMedia}
                                 isMulti
                                 defaultOptions/>
                </div>
            </div>
        )
    }
}

MediaComponent.propTypes = {
    getMedia: PropTypes.func,
    selected: PropTypes.object,
    selectedMedia: PropTypes.func
};

export default MediaComponent;