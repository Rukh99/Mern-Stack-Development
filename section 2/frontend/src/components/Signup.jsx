import React from 'react'

const Signup = () => {
  return (
    <div>
    <h1 class="text-center">Signup</h1>
    <div class="card-1 mx-auto ">
    <div class="card-body">
    <label> FIRST NAME </label>
    <input type="text" class="form-control" placeholder="First Name" />
    <label> LAST NAME </label>
    <input type="text" class="form-control" placeholder="Last Name" />
    <label> EMAIL </label>
    <input type="text" class="form-control" placeholder="Email" />
    <label> PASSWORD </label>
    <input type="password" class="form-control" placeholder="Password" />
     <a> Already have an account ? Log in</a> <br />
    <button class="btn btn-dark p-2 btn-lg"> SIGN UP  </button>

  <span> </span>
    </div> 
    
    </div>
    </div>
  )
}

export default Signup
