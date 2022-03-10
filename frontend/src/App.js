import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home';
import Login from './Component/NavBar/NavItems/Login'
import Signup from './Component/NavBar/NavItems/Signup'
import Logout from './Component/NavBar/NavItems/Logout'
import Navbar from './Component/NavBar/Navbar';
import { autoLogin } from './redux/action'
import { connect } from 'react-redux'

function App({ autoLogin }) {

  useEffect(() => {
    autoLogin()
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default connect(null, { autoLogin })(App);
