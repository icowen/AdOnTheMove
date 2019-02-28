import React, { Component } from 'react';
import {Collapse} from 'react-collapse';

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
            <div>
                <div className={'media'} onClick={this.onClick}>{d.name}</div>
                <Collapse isOpened={this.state.isOpened}>
                    <div className={'media-info'}>{`ID: ${d.id}`}</div>
                    <div className={'media-info'}>{`Group Name: ${d.group_name}`}</div>
                    <div className={'media-info'}>{`Group ID: ${d.group_id}`}</div>
                    <div className={'media-info'}>{`Uploaded On: ${d.uploaded_on}`}</div>
                </Collapse>
            </div>
        );
    }
}

export default MediaItem;
