import React, { Component } from 'react'
import PropTypes from 'prop-types';

class UserForm extends Component {
  state = {
    userInfos: {
      firstName: '',
      lastName: '',
      userName: ''
    }  
  }

  updateUserInfos = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      userInfos: {
       ...this.state.userInfos,
       [name]: value
      }
    })              
  }

  addUser = (event) => {
    event.preventDefault()
	this.props.onAddUser(this.state.userInfos)
  }

  allFieldsCompleted = () => {return (Object.values(this.state.userInfos).includes(''))}

  render() {
     return (
      <form onSubmit={this.addUser}>
        <input
          type="text"
          placeholder="Enter first name"
    	  name='firstName'
          value={this.state.userInfos.firstName}
          onChange={this.updateUserInfos}
		/>
        <input
          type="text"
          placeholder="Enter last name"
		  name='lastName'
          value={this.state.userInfos.lastName}
          onChange={this.updateUserInfos}
        />
        <input
          type="text"
          placeholder="Enter username"
		  name='userName'
          value={this.state.userInfos.userName}
          onChange={this.updateUserInfos}
        />
        <button disabled={this.allFieldsCompleted()}>Add</button>
      </form>
    )
  }
}

UserForm.propTypes = {
  onAddUser: PropTypes.func.isRequired
}

export default UserForm