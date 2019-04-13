import React, { Component } from "react";
import "./App.css";
import Project from "../Project/Project";
import Footer from "../Footer/Footer";
import Admin from "../Admin/Admin";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from '../Header/Header'
import Home from '../Home/Home'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Project} />
          <Route path="/admin" component={Admin} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
