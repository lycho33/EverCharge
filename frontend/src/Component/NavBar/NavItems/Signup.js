import React, { useState } from 'react'
import { register } from '../../../redux/action'
import { connect } from 'react-redux'

const Signup = ( { register } ) => {

  const [state, setState] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
})

const handleInputChange = (e) => {
  setState((prevProps) => ({
      ...prevProps,
      [e.target.name]: e.target.value
  }))
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(state)
  register(state)
  // navigate('/')
}

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" name="username" value={state.username} onChange={handleInputChange}/>
        <input type="text" placeholder="first_name" name="first_name" value={state.first_name} onChange={handleInputChange}/>
        <input type="text" placeholder="last_name" name="last_name" value={state.last_name} onChange={handleInputChange}/>
        <input type="text" placeholder="email" name="email" value={state.email} onChange={handleInputChange}/>
        <input type="password" placeholder="password" name="password" value={state.password} onChange={handleInputChange}/>
        {/* <input type="password" placeholder="password_confirmation" name="password_confirmation" value={state.password_confirmation} onChange={handleInputChange}/> */}
        <button placeholder="submit" type="submit">SignUp</button>
  </form>
    </div>
  )
}

export default connect( null, { register })(Signup)