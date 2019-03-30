import React, { Component } from 'react';
import {sortByGroup, sortByName} from "../Helpers/HelperFunctions";
import DateSelectorComponent from "./DateSelectorComponent";
import ReportSelectorComponent from "./ReportSelectorComponent";
import ParameterContainer from "./ParameterContainer";
import AsyncComponent from "./AsyncComponent";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            media: null,
            devices: null,
            selectedMedia: [],
            selectedDevices: [],
            selectedReport: null,
            startDate: null,
            endDate: null
        };
        this.api_key = process.env.REACT_APP_API_KEY;
        this.getMedia = this.getMedia.bind(this);
        this.getDevices = this.getDevices.bind(this);
        this.getReport = this.getReport.bind(this);
        this.selectedMedia = this.selectedMedia.bind(this);
        this.selectedDevices = this.selectedDevices.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.selectedReport = this.selectedReport.bind(this);
    }

    async getMedia() {
        const response = await fetch('https://api.reveldigital.com/api/media?api_key='+`${this.api_key}`)
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
        const response = await fetch(`https://api.reveldigital.com/api/devices?api_key=${this.api_key}&include_snap=true`)
            .catch(err => console.error("Failed API call: ", err));
        const json = await response.json();
        let devices = json.sort(sortByName);
        this.setState({devices: devices});
        return devices.map((d) =>{return {value: d.id, label: d.name}});
    }

    async getReport() {
        console.log(this.state);
    }

    selectedMedia(selectedMedia) {
        this.setState({selectedMedia: selectedMedia});
    }

    selectedDevices(selectedDevices) {
        this.setState({selectedDevices: selectedDevices});
    }

    selectedReport(selectedReport) {
        this.setState({selectedReport: selectedReport});
    }

    handleChangeStart(startDate) {
        this.setState({startDate: startDate});
    }

    handleChangeEnd(endDate) {
        this.setState({endDate: endDate});
    }

    render() {
        let reportComponent = <ReportSelectorComponent value={this.state.selectedReport}
                                                       selected={this.selectedReport}/>;
        let deviceComponent = <AsyncComponent value={this.state.selectedDevices}
                                              getOptions={this.getDevices}
                                              selected={this.selectedDevices}/>;
        let dateComponent = <DateSelectorComponent startDate={this.state.startDate}
                                                   endDate={this.state.endDate}
                                                   startChange={this.handleChangeStart}
                                                   endChange={this.handleChangeEnd}/>;
        let mediaComponent = <AsyncComponent value={this.state.selectedMedia}
                                             getOptions={this.getMedia}
                                             selected={this.selectedMedia}/>;
        return (
            <div className={'page'}>
                <div className={'page-title'}>{"Ad On The Move"}</div>
                <div className={'get-report'}>
                    <button className={'report-button'} onClick={this.getReport}>{'Get Report'}</button>
                </div>
                <div className={'content'}>
                    <ParameterContainer name={'Report'}
                                        component={reportComponent}/>
                    <ParameterContainer name={'Devices'}
                                        component={deviceComponent}/>
                    <ParameterContainer name={'Date'}
                                        component={dateComponent}/>
                    <ParameterContainer name={'Media'}
                                        component={mediaComponent}/>
                </div>
            </div>
        )
    }
}

export default HomePage;