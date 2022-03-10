import React from 'react'
import { logoutUser } from '../redux/action'
import { connect } from 'react-redux'

function Logout({ logoutUser}) {
    const logout = () => {
        localStorage.removeItem('token')
        logoutUser()
        succes('Thanks for vising, successfully logged out!')
    }

  return (
    <button onClick={logout}>Logout</button>
  )
}

export default connect( null, { logoutUser })(Logout)