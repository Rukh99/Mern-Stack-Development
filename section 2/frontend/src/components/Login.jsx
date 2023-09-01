import React from 'react'




const Login = () => {
  return (
    <form>
    <div class= "card"> 
    <h1>  LOGIN </h1>
    
    <label> USER NAME </label><br></br>
    <input type="text" name="username"/><br></br>
    <label> PASSWORD </label><br></br>
      <input type="password" name="password"/><br></br>
      <button className="btn btn-danger" onClick={() => {alert("BUTTON was click")}}> click here </button>
    </div>

    
      
    </form >
  )
}

export default Login
