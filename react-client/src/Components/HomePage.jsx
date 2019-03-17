import React, { Component } from 'react';
import DevicesComponent from './DevicesComponent';
import MediaComponent from "./MediaComponent";
import {sortAlphabetically} from "../Helpers/HelperFunctions";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            media: null,
            devices: null,
            selectedMedia: null,
            selectedDevices: null
        };
        this.getMedia = this.getMedia.bind(this);
        this.selectedMedia = this.selectedMedia.bind(this);
    }

    async getMedia() {
        const response = await fetch('https://api.reveldigital.com/api/media?api_key=JqZcD6X-fxF_HX6TBHeeKQ')
            .catch(err => console.error("Failed API call: ", err));
        const json = await response.json();
        let media = json.sort(sortAlphabetically);
        this.setState({media: media});
        return media.map((d) => {return {value: d.id, label: d.name}});
    }

    selectedMedia(selectedMedia) {
        this.setState({selectedMedia: selectedMedia});
    }

    render() {
        return (
            <div className={'page'}>
                <div className={'page-title'}>{"Ad On The Move"}</div>
                <div className={'content'}>
                    <DevicesComponent/>
                    <MediaComponent selected={this.state.selectedMedia}
                                    getMedia={this.getMedia}
                                    selectedMedia={this.selectedMedia}/>
                </div>
            </div>
        )
    }
}

export default HomePage;