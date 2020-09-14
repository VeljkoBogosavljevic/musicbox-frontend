import React, { Component } from 'react';
import '../../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NewReleases from '../NewReleases/NewReleases';
import Welcome from '../Welcome/Welcome';

class App extends Component {

  constructor (props) {
    console.log('App Component');
    super(props);
  }

  render () {
    return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Welcome key="welcome"/>
            </Route>
            <Route path="/new-releases/:selectedMarket">
              <NewReleases key="new-releases"/>
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
