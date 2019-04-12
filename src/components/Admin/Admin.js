import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../Form/Form'




class Admin extends Component {



    

    render() {
        return (
            <div>
                <Form />
            </div>
        )}
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(Admin);
