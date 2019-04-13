import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });


class ProjectTable extends Component {

  //Get all the projects on the DOM upon load
    componentDidMount = () => {
        this.props.dispatch({ type: 'SHOW_PROJECTS' });
}

//This will delete a project from the database
    handleDelete = (project) => {
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: project.name })
}
 

    render() {
        const { classes } = this.props;
        return (
        <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.props.reduxState.projects.map(project => (
            <TableRow key={project.id}>
              <TableCell component="th" scope="row">
                {project.name}
              </TableCell>
              <Button variant="contained" color="primary" 
              className={classes.button} 
              onClick={()=>{this.handleDelete(project)}}>Delete Project</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Paper>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

    export default connect(mapReduxStateToProps)(withStyles(styles)(ProjectTable));
