import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import Devices from "./Devices";

class Media extends Component {
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
        fetch('http://api.reveldigital.com/api/media?api_key=JqZcD6X-fxF_HX6TBHeeKQ')
            .then(results => {return results.json()})
            .then(data => {
                let devices = data.map((d) =>
                    {return (
                    <ul>
                        <li>{d.name}</li>
                        <ul>
                            <li>{d.group_name}</li>
                        </ul>
                    </ul>)});
                this.setState({component: devices})})
            .catch(err => console.error("Failed API call: ", err));
    }

    render() {
        return (
            <div>
                <div className={'section-header'}>{"Media"}</div>
                <div>{this.state.component}</div>
            </div>
        )
    }
}
export default Media;