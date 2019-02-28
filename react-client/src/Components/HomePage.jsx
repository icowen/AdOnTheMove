import React, { Component } from 'react';
import Devices from './Devices';
import MediaComponent from "./MediaComponent";

class HomePage extends Component {
    render() {
        return (
            <div className={'page'}>
                <div className={'page-title'}>{"Ad On The Move"}</div>
                <div className={'content'}>
                    <Devices/>
                    <MediaComponent/>
                </div>
            </div>
        )
    }
}

export default HomePage;