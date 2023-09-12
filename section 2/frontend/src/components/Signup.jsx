import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Signup = () => {


//initialize formik
  const SignupForm = useFormik({
    initialValues: {
      firstname  : '',
      lastname  : '',
      EMAIL : '',
      PASSWORD :'',
    },
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm();

      // sent values to backend 
    },
  });
  return (
    <div>

    <h1 class="text-center my-3">Signup</h1>

    <div class="card-1 mx-auto ">
    <div class="card-body">
    <form onSubmit={SignupForm.handleSubmit}>
    <label > FIRST NAME </label>
    <span style={{fontsize:10 , marginleft : '10px', color:'red'}}> {SignupForm.touched.firstname && SignupForm.errors.firstname}</span>
    <input id='firstname' onChange={SignupForm.handleChange} value={SignupForm.values.firstname} type="text" class="form-control" placeholder="First Name" />
    <label> LAST NAME </label>
    <span style={{fontsize:10 , marginleft : '10px', color:'red'}}>{SignupForm.touched.lastname && SignupForm.errors.lastname}</span>
    <input id='lastname' onChange={SignupForm.handleChange} value={SignupForm.values.lastname}type="text" class="form-control" placeholder="Last Name" />
    <label> EMAIL </label>
    <span style={{fontsize:10 , marginleft : '10px', color:'red'}}>{SignupForm.touched.email && SignupForm.errors.email}</span>
    <input id='email' onChange={SignupForm.handleChange} value={SignupForm.values.email} type="text" class="form-control" placeholder="Email" />
    <label> PASSWORD </label>
    <input id='password' onChange={SignupForm.handleChange} value={SignupForm.values.password}type="password" class="form-control" placeholder="Password" />
    <button type="submit" class="btn btn-danger w-100"> SIGN UP  </button>
    </form>
    </div> 
    </div>
    </div>
  )
}

export default Signup
