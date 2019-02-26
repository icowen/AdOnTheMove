import React, { Component } from 'react';
import Loader from 'react-loader-spinner'

class Devices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: <Loader  type={"Ball-Triangle"}
                                color={"#00BFFF"}
                                height={50}
                                width={50}/>
        }
    }

    componentDidMount () {
        fetch('http://api.reveldigital.com/api/devices?api_key=JqZcD6X-fxF_HX6TBHeeKQ&include_snap=true')
            .then(results => {return results.json()})
            .then(data => {
                let devices = data.map((d) =>
                    {return (<li>{d.name}</li>)});
            this.setState({component: devices})})
            .catch(err => console.error("Failed API call: ", err));
    }

    render() {
        return (
                <div>
                    {this.state.component}
                </div>
        )
    }
}
export default Devices;