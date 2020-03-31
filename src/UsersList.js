import React, { Component } from 'react'
import PropTypes from 'prop-types';
import User from './User';

class UsersList extends Component {
  state = {
    show: true
  }

  handleToggle = (event) => {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }

  render() {
    return (
      <div>
          <h2>Users</h2>
       
          {this.props.users && this.props.users.length > 0 ? 
       		<p>
              <button className='toggleButton' onClick={(e) => this.handleToggle(e)} >
                { this.state.show ? 'Hide' : 'Show' } the number of games played
              </button></p>
		    : ''}
          
          <ol>
            { this.props.users.map((user, index) =>  
            <User key={index} user={user} displayScore={this.state.show} />
            )}   
          </ol>
      </div>
    )
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UsersList