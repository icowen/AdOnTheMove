import React, { Component } from 'react';
import DevicesComponent from './DevicesComponent';
import MediaComponent from "./MediaComponent";

class HomePage extends Component {
    render() {
        return (
            <div className={'page'}>
                <div className={'page-title'}>{"Ad On The Move"}</div>
                <div className={'content'}>
                    <DevicesComponent/>
                    <MediaComponent/>
                </div>
            </div>
        )
    }
}

export default HomePage;