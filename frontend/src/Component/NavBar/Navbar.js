import React from 'react'
import Login from './NavItems/Login'
import Signup from './NavItems/Signup'
import Logout from './NavItems/Logout'
import { Link } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

function Navbar() {

    const user = useSelector(state => state.user)

    if(user.id){
        return(
            <div>
                <Link to="/logout">Log Out</Link>
            </div>
        )
    } else {
        return(
            <div>
                <Link to="/login">Login</Link><br />
                <Link to="/signup">Sign Up</Link><br /><br />
            </div>
        )
    }

//   return (
//     <div>
//         <h3>Navbar!</h3>
//         <Link to="/">Home</Link><br />
//         <Link to="/login">Login</Link><br />
//         <Link to="/signup">Sign Up</Link><br />
//         <Link to="/logout">Log Out</Link><br /><br />
//     </div>
//   )
}

export default Navbar