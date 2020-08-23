import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
<Navbar/>
      </Router>
    );
  }
}

export default App;
