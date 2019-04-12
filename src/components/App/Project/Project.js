import React, { Component } from 'react';
import { connect } from 'react-redux';




class Project extends Component {

    componentDidMount() {
    this.props.dispatch( { type: 'SET_PROJECTS' } );
    }

// use component did mount to dispatch an action to request the plantList from the API
    

    render() {
        return (
            <div>
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
            <footer>
                <p><a href="https://github.com/nomadtellus/" target="_blank">Visit my Github Page</a>
</p>
            </footer>
        )}
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(PlantList);
