import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route name="home" exact path="/" component={HomePage} />
                </div>
            </Router>
        )
    }
}
export default App;