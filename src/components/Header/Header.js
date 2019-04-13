import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
        <header className="App-header">
        <h1>Rowan A. Smith</h1>
        <h2>I have come here to chew bubblegum and build apps...</h2>
        <h3>And I'm all out of bubblegum.</h3>
      </header>
    );
  }
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(Header);
