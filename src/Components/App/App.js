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
import markets from '../../Constants/markets';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      selectedMarket: markets[1].code
    };
  }

  render () {
    const onSelect = (selectedMarket) => {
      console.log('Selected market: ', selectedMarket);
      this.setState({
        selectedMarket: selectedMarket
      });
    }

    return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Welcome selectedMarket = {this.state.selectedMarket} onSelect = {onSelect}/>
            </Route>
            <Route path="/new-releases">
              <NewReleases selectedMarket = {this.state.selectedMarket}/>
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
