import React, { Component } from 'react';
class Devices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: []
        }
    }

    componentDidMount () {
        console.log('CLICKAGE');
        fetch('http://api.reveldigital.com/api/devices?api_key=JqZcD6X-fxF_HX6TBHeeKQ&include_snap=true')
            .then(results => {return results.json()})
            .then(data => {
                let devices = data.map((d) =>
                    {return (<li>{d.name}</li>)});
            this.setState({devices: devices})});
    }

    render() {
        return (
                <div>
                    {this.state.devices}
                </div>
        )
    }
}
export default Devices;