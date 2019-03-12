import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import {sortAlphabetically} from "../Helpers/HelperFunctions"
import MediaItem from "./MediaItem";
import AsyncSelect from 'react-select/lib/Async';

class MediaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: <Loader  type={"Ball-Triangle"}
                                color={"#00BFFF"}
                                height={50}
                                width={50}/>,
            selectedMedia: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selectedOption){
        this.setState({selectedMedia: selectedOption});
        console.log('Option selected:', selectedOption);
    }

    async mediaOptions () {
        const response = await fetch('https://api.reveldigital.com/api/media?api_key=JqZcD6X-fxF_HX6TBHeeKQ')
            .catch(err => console.error("Failed API call: ", err));
        const json = await response.json();
        return json
            .sort(sortAlphabetically)
            .map((d) =>
            {return {
                value: d.id,
                label: d.name
            }});
    }

    render() {
        let { selectedMedia } = this.state;
        return (
            <div className={'section-container'}>
                <div className={'section-header'}>{"Media"}</div>
                <div className={'section-content'}>
                    <AsyncSelect value={selectedMedia}
                                 onChange={this.handleChange}
                                 loadOptions={this.mediaOptions}
                                 isMulti
                                 defaultOptions/>
                </div>
            </div>
        )
    }
}
export default MediaComponent;