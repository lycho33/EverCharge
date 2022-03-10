import React from 'react'
import '../../css/Navbar.css'
import Login from './NavItems/Login'
import Signup from './NavItems/Signup'
import Logout from './NavItems/Logout'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {

    const user = useSelector(state => state.user)
    return (
        <div className='navbar'>
            {(user.id) ?
                <div className='registration'>
                    <Link to="/logout" className='link'>Log Out</Link>
                </div>
            :
                <div className='registration'>
                    <Link to="/login" className='link'>Login |</Link>&nbsp;
                    <Link to="/signup" className='link'>Sign Up</Link><br /><br />
                </div>
              
            } 
        </div>
    )

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