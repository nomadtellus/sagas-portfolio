import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../Form/Form'
import ProjectTable from '../ProjectTable/ProjectTable'
import {Link} from 'react-router-dom';


class Admin extends Component {

    onClick = () => {

    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Link to="/">Back to Projects</Link>
                <Form />
                <ProjectTable />
            </div>
        )}
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(Admin);
