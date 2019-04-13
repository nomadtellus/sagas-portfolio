import React, { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        {/* this will be a link to my github page */}
        <p>
          <a href="https://github.com/nomadtellus/" target="_blank">
            Visit my Github Page
          </a>
        </p>
      </footer>
    );
  }
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(Footer);
