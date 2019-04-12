import React, { Component } from 'react';
import './App.css';
import Project from '../Project/Project';
import Footer from '../Footer/Footer'
import { HashRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <header className="Header">
          <h1>Rowan A. Smith</h1>
        </header>

      <div>
        <Route exactPath="/" component={Project}/>

      </div>

        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
