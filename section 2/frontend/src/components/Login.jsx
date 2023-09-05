import React from 'react'




const Login = () => {
  return (
    <div>
    <h1 class ="text-center"> LOGIN </h1>
    <form>
    <div class="card mx-auto ">
    <div class="card-body">
    <label>USER NAME </label>
    <input type="text" class="form-control" placeholder="ENTER YOUR NAME "></input>
    <label>PASSWORD</label>
    <input type="text" class="form-control" placeholder="ENTER YOUR PASSWORD "></input>
     <a> Forget password </a> <btn> </btn>

    <button class = "btn btn-danger width:30px" > LOGIN </button><br></br>

    <span> Not a member </span><br></br>
    <button class = "btn btn-success"> Signup </button>
    
    
    </div>
    
    </div>
    </form>
    </div>
  )
}

export default Login
