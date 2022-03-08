export const register = (user) => {
    return (dispatch) => {
      axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
      .then(r => {
          if(r.data.status === 'created'){
              console.log(r)
              dispatch({
                  type:'CREATING_OR_GETTING_USER',
                  payload: r
              })
          } 
      })
      .catch(error => console.log('api errors:', error))
    }
}