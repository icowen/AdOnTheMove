import React, { Component } from 'react';
import {sortByGroup, sortByName} from "../Helpers/HelperFunctions";
import ParameterComponent from "./ParameterComponent";
import "react-datepicker/dist/react-datepicker.css";
import DateSelector from "./DateSelector";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            media: null,
            devices: null,
            selectedMedia: null,
            selectedDevices: null,
            startDate: null,
            endDate: null
        };
        this.getMedia = this.getMedia.bind(this);
        this.getDevices = this.getDevices.bind(this);
        this.selectedMedia = this.selectedMedia.bind(this);
        this.selectedDevices = this.selectedDevices.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
    }

    async getMedia() {
        const response = await fetch('https://api.reveldigital.com/api/media?api_key=JqZcD6X-fxF_HX6TBHeeKQ')
            .catch(err => console.error("Failed API call: ", err));
        const json = await response.json();
        let media = json.sort(sortByName);
        this.setState({media: media});
        return media
            .sort(sortByGroup)
            .map((d) => {
                let name = `[${d.group_name}] ${d.name}`;
                return {value: d.id, label: name}});
    }

    async getDevices() {
        const response = await fetch('https://api.reveldigital.com/api/devices?api_key=JqZcD6X-fxF_HX6TBHeeKQ&include_snap=true')
            .catch(err => console.error("Failed API call: ", err));
        const json = await response.json();
        let devices = json.sort(sortByName);
        this.setState({devices: devices});
        return devices.map((d) =>{return {value: d.id, label: d.name}});
    }

    selectedMedia(selectedMedia) {
        this.setState({selectedMedia: selectedMedia});
    }

    selectedDevices(selectedDevices) {
        this.setState({selectedDevices: selectedDevices});
    }

    handleChangeStart(startDate) {
        this.setState({startDate: startDate});
    }

    handleChangeEnd(endDate) {
        this.setState({endDate: endDate});
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
                    <DateSelector startDate={this.state.startDate}
                                  endDate={this.state.endDate}
                                  startChange={this.handleChangeStart}
                                  endChange={this.handleChangeEnd}/>
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