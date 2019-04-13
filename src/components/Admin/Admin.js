import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../Form/Form'
import ProjectTable from '../ProjectTable/ProjectTable'


class Admin extends Component {


    render() {
        return (
            <div>
                <Form />
                <ProjectTable />
            </div>
        )}
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(Admin);
