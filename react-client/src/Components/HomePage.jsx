import React, { Component } from 'react';
import {sortAlphabetically} from "../Helpers/HelperFunctions";
import ParameterComponent from "./ParameterComponent";

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
        this.getDevices = this.getDevices.bind(this);
        this.selectedMedia = this.selectedMedia.bind(this);
        this.selectedDevices = this.selectedDevices.bind(this);
    }

    async getMedia() {
        const response = await fetch('https://api.reveldigital.com/api/media?api_key=JqZcD6X-fxF_HX6TBHeeKQ')
            .catch(err => console.error("Failed API call: ", err));
        const json = await response.json();
        let media = json.sort(sortAlphabetically);
        this.setState({media: media});
        return media.map((d) => {return {value: d.id, label: d.name}});
    }

    async getDevices() {
        const response = await fetch('https://api.reveldigital.com/api/devices?api_key=JqZcD6X-fxF_HX6TBHeeKQ&include_snap=true')
            .catch(err => console.error("Failed API call: ", err));
        const json = await response.json();
        let devices = json.sort(sortAlphabetically);
        this.setState({devices: devices});
        return devices.map((d) => {return {value: d.id, label: d.name}});
    }

    selectedMedia(selectedMedia) {
        this.setState({selectedMedia: selectedMedia});
    }

    selectedDevices(selectedDevices) {
        this.setState({selectedDevices: selectedDevices});
    }

    render() {
        return (
            <div className={'page'}>
                <div className={'page-title'}>{"Ad On The Move"}</div>
                <div className={'content'}>
                    <ParameterComponent name={'Devices'}
                                        value={this.state.selectedDevices}
                                        getOptions={this.getDevices}
                                        selected={this.selectedDevices}/>
                    <ParameterComponent name={'Media'}
                                        value={this.state.selectedMedia}
                                        getOptions={this.getMedia}
                                        selected={this.selectedMedia}/>
                </div>
            </div>
        )
    }
}

export default HomePage;