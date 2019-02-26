import React, { Component } from 'react';
import Devices from './Devices';
import Media from "./Media";

class HomePage extends Component {
    render() {
        return (
            <div className={'content'}>
                <Devices/>
                <Media/>
            </div>
        )
    }
}

export default HomePage;