import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import PropTypes from 'prop-types';

class MediaItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        };
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.setState(prevState => ({isOpened: !prevState.isOpened}));
    }

    render() {
        const d = this.props.data;
        return(
            <div id={d.name}>
                <div className={'component-item'} onClick={this.onClick}>{d.name}</div>
                <Collapse isOpened={this.state.isOpened}>
                    <div className={'item-info'}>{`ID: ${d.id}`}</div>
                    <div className={'item-info'}>{`Group Name: ${d.group_name}`}</div>
                    <div className={'item-info'}>{`Group ID: ${d.group_id}`}</div>
                    <div className={'item-info'}>{`Uploaded On: ${d.uploaded_on}`}</div>
                </Collapse>
            </div>
        );
    }
}

MediaItem.propTypes = {
    d: PropTypes.array,
    id: PropTypes.string
};

export default MediaItem;
