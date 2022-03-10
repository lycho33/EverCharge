import React from 'react'
import { logoutUser } from '../../../redux/action'
import { connect } from 'react-redux'

function Logout({ logoutUser }) {
    const logout = () => {
        localStorage.removeItem('token')
        logoutUser()
    }

  return (
    <button onClick={logout}>Logout</button>
  )
}

export default connect( null, { logoutUser })(Logout)