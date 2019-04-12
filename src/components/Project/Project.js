import React, { Component } from 'react';
import { connect } from 'react-redux';




class Project extends Component {

    componentDidMount() {
    this.props.dispatch( { type: 'SHOW_PROJECTS' } );
    }

// use component did mount to dispatch an action to request the projects from the API
    

    render() {
        return (
            <div>
                {/* This will generate a div containing all the project info for each project in db */}
                {this.props.reduxState.projects.map(project => (
                    <div key={project.id}>
                    <h2>{project.name}</h2>
                    <img src={project.thumbnail}></img>
                    <p>{project.description}</p>
                    <p>{project.website}</p>
                    <p>{project.date_completed}</p>
                    <p>{project.tag}</p>
                    </div>)
                )}
            </div>
        )}
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(Project);
