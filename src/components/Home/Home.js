import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';


class Home extends Component {

onClick = () =>{

}

  render() {
    return (
<div>
    <h1>Put on the glasses...</h1>
    <img src="https://i.warbycdn.com/s/l/72a148d770c2e4fa72d0951611931e3f64314548/2000x1000.jpg?quality=80" onClick={this.onClick}></img>
    <Link to="/projects">OBEY</Link>

</div>
    );
  }
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(Home);
