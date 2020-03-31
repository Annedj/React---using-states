import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm';
import UsersList from './UsersList';

class App extends Component {
  state = {
  	users: []
  }

  addNewUser = (newUser) => {    
    this.setState((prevState) => ({
 	  users: [...prevState.users, newUser ]
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<UserForm onAddUser={this.addNewUser}/>
    	<UsersList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
