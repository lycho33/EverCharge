import React from 'react'
import { logoutUser } from '../../../redux/action'
import { connect } from 'react-redux'
import {useNavigate, userNavigate} from 'react-router-dom'

function Logout({ logoutUser }) {

  let navigate = useNavigate()

  const redirect = () => {
    navigate('/')
  }

    const logout = () => {
        localStorage.removeItem('token')
        logoutUser()
        redirect()
    }

  return (
    <button onClick={logout}>Logout</button>
  )
}

export default connect( null, { logoutUser })(Logout)