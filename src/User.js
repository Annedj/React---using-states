import React from 'react'
import PropTypes from 'prop-types';

function User(props) {
  return (
      <li key={props.key} >{props.user.userName} played { props.displayScore ? '0' : '*' } game </li>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  displayScore: PropTypes.bool.isRequired
}

export default User