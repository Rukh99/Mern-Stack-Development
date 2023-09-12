import { useFormik } from 'formik'
import React from 'react'



const Login = () => {

  const login = useFormik({
    initialValues : {
      username: '',
      password: '',
    },
    onsubmit: (values) => {
      console.log(values);
    resetform();

      // sent values to backend 
    },
  })


}
return (
  <div>
    <h1 class="text-center"> LOGIN </h1>
    <div class="card mx-auto ">
      <div class="card-body">
        <form onSubmit={login.handleChange}>
          <label>USER NAME </label>
          <input id='username' onChange={login.handleChange} value={login.values.username} type="text" class="form-control" placeholder="ENTER YOUR NAME "></input>
          <label>PASSWORD</label>
          <input id='password' onChange={login.handleChange} value={login.values.password} type="text" class="form-control" placeholder="ENTER YOUR PASSWORD "></input>
          <button class="btn btn-danger width:30px" > SUBMIT  </button>
        </form>

      </div>

    </div>
  </div>
)


export default Login
