import axios from 'axios';

const URL = "http://localhost:3001"

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const register = (user) => {
    return (dispatch) => {
      dispatch({ type: 'CREATING_OR_GETTING_USER' })
      axios.post(`${URL}/users`, {user})
      .then(r => {
          if(r.statusText === 'OK'){
            localStorage.setItem('token', r.data.token)
            dispatch(loginUser(r.data.user))
          } 
      })
      .catch(error => console.log('api errors:', error))
    }
}