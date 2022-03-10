import React from 'react'
import '../../css/Navbar.css'
import { GiPowerLightning } from 'react-icons/gi';
import lightning_icon from '../../imgs/lightning_icon.png'
import Login from './NavItems/Login'
import Signup from './NavItems/Signup'
import Logout from './NavItems/Logout'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {

    const user = useSelector(state => state.user)
    return (
        <>
            <div className='grid-navbar'>
                <div className='grid-navbar-item home'>  
                    <img src={lightning_icon} />
                    <h1>EverCharge</h1>
                </div>
                {(user.id) ?
                    <div className='grid-navbar-item registration'>
                        <Link to="/logout" className='link'>Log Out</Link>
                    </div>
                :
                    <div className='grid-navbar-item registration'>
                        <Link to="/login" className='link'>Login |</Link>&nbsp;
                        <Link to="/signup" className='link'>Sign Up</Link><br /><br />
                    </div>
                
                } 
            </div>
        </>
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