import React from 'react'
import Login from './NavItems/Login'
import Signup from './NavItems/Signup'
import Logout from './NavItems/Logout'


function Navbar() {
  return (
    <div>Navbar
        <Signup />
        <Login />
        <Logout />
    </div>
  )
}

export default Navbar