import React, { Component } from 'react';
import '../../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import NewReleases from '../NewReleases/NewReleases';
import Welcome from '../Welcome/Welcome';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      selectedMarket: ''
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
              <Welcome onSelect = {onSelect}/>
            </Route>
            <Route path="/new-releases">
              <NewReleases />
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
