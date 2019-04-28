import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppNavbar from './components/AppNavbar';
import EarthquakesList from './components/EarthquakesList';
import Plotter from "./components/Plotter";

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <Route exact path="/" component={Plotter} />
            <Route path="/top10" component={EarthquakesList} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
