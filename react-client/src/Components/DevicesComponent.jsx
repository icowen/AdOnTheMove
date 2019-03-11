import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import {sortAlphabetically} from '../Helpers/HelperFunctions'

class DevicesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: <Loader type={"Ball-Triangle"}
                               color={"#00BFFF"}
                               height={50}
                               width={50}/>
        };
    }

    componentDidMount () {
        fetch('https://api.reveldigital.com/api/devices?api_key=JqZcD6X-fxF_HX6TBHeeKQ&include_snap=true')
            .then(results => {return results.json()})
            .then(data => {
                let devices = data.sort(sortAlphabetically)
                    .map((d) => {return (<div className={'component-item'}>{d.name}</div>)});
            this.setState({component: devices})})
            .catch(err => console.error("Failed API call: ", err));
    }

    render() {
        return (
                <div className={'section-container'}>
                    <div className={'section-header'}>{"Devices"}</div>
                    <div className={'section-content'}>{this.state.component}</div>
                </div>
        )
    }
}
export default DevicesComponent;