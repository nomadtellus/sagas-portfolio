import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { lightGreen } from '@material-ui/core/colors';


const styles = {
  card: {
    minWidth: 450,
    minHeight:450,
    maxWidth: 450,
    maxHeight:450,
    margin: 10,
    padding: 10,
    display: "inline-block",
    backgroundColor: 'lightGrey'
 
  },
  cardDiv: {
      margin: "0 auto 0 auto",
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      textAlign: "center"
     
  }
}

class Project extends Component {

    componentDidMount() {
    this.props.dispatch( { type: 'SHOW_PROJECTS' } );
    }

// use component did mount to dispatch an action to request the projects from the API
  



render() {
    const { classes } = this.props;
    return (
        <div className="mainDiv">
          {this.props.reduxState.projects.map(project => (
            <Card className={classes.card}>
              <img className={classes.cardDiv} height='200' width='200'src={project.thumbnail} alt={project.name} />
              <div className={classes.cardDiv}>
              <p className="name">{project.name} <span className="tag">{project.tag_id}</span></p>
              <p className="description">{project.description}</p>
              <p className="date">{project.date_completed}</p>
              <a className="link" href={project.github} >GitHub</a> 
              <a className="link" href={project.website}>Website</a>
          </div>
            </Card>
          ))}
        </div>
    );
}
}

const mapStateToProps = reduxState => ({
reduxState,
});

export default connect(mapStateToProps)(withStyles(styles)(Project));
