import React, { Component } from 'react';
import { connect } from 'react-redux';




class Form extends Component {

    state = {
        newProject: {
            name: "",
            description: "",
            thumbnail: "",
            website: "",
            github: "",
            date_completed: "",
            tag: ""
        }
      };
    
      //This will send the new project state to the reducer
      addProject = () => {
        const action = {type: 'ADD_PROJECT', payload: this.state.newProject};
        this.props.dispatch(action);
      }
    
      //this will change the state as the input form is updated
      handleChangeFor = event => {
        let propertyName = event.target.name;
        console.log("Property name is", propertyName);
        this.setState({
          newCustomer: {
            ...this.state.newCustomer,
            [propertyName]: event.target.value
          }
        });
      };
    
      //Grab  info from the form and send it to the server
      handleSubmit = event => {
        event.preventDefault();
        this.props.addCustomer(this.state.newCustomer);
      };
    
      render() {
        return (
          <section>
            <form onSubmit={this.handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                onChange={this.handleChangeFor}
                value={this.state.newProject.name}
              />
              <br />
              <label>Description:</label>
              <input
                type="text"
                name="description"
                onChange={this.handleChangeFor}
                value={this.state.newProject.description}
              />
               <br />
              <label>Thumbnail Link:</label>
              <input
                type="text"
                name="thumbnail"
                onChange={this.handleChangeFor}
                value={this.state.newProject.thumbnail}
              />
                <br />
              <label>Website:</label>
              <input
                type="text"
                name="website"
                onChange={this.handleChangeFor}
                value={this.state.newProject.website}
              />
              <br />
              <label>Github Repo:</label>
              <input
                type="text"
                name="github"
                onChange={this.handleChangeFor}
                value={this.state.newProject.github}
              />
              <br />
              <label>Date Completed (MM-DD-YYYY):</label>
              <input
                type="text"
                name="date_completed"
                onChange={this.handleChangeFor}
                value={this.state.newProject.date_completed}
              />
              <br />
              <label>Tag:</label>
              <select>
                  <option name="tag" onChange={this.handleChangeFor} value={this.state.newProject.tag}>React</option>
                  <option name="tag" onChange={this.handleChangeFor} value={this.state.newProject.tag}>jQuery</option>
                  <option name="tag" onChange={this.handleChangeFor} value={this.state.newProject.tag}>Node</option>
                  <option name="tag" onChange={this.handleChangeFor} value={this.state.newProject.tag}>SQL</option>
                  <option name="tag" onChange={this.handleChangeFor} value={this.state.newProject.tag}>Redux</option>
                  <option name="tag" onChange={this.handleChangeFor} value={this.state.newProject.tag}>HTML</option>
              </select>
              <button type="submit">Submit</button>
            </form>
          </section>
        );
      }
    }


const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(Form);
