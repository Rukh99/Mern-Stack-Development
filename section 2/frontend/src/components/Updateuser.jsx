import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Signup from './Signup';
import Swal from 'sweetalert2';

const Updateuser = () => {
  // get the url parameter from the database
  const { id } = useParams();

  const [userData, setUserData] = useState(null)
  const navigate =useNavigate ();


  const fetchuserdata = async () => {

    const res = await fetch('http://localhost:5000/user/getbyid/' + id)
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setUserData(data);
  }
  useEffect(() => {
    fetchuserdata();
  }, [])

  const submitForm = async (values) => {
    const res = await fetch('http://localhost:5000/user/update/' + id, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(res.status);
    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'updated',
        text: 'Updated successfully'
      })
    }
  

    console.log(values);
  }

  return (
    <div>
      <div class="card-body">
        <h1> user update data </h1>

        {
          userData !== null ?
            <Formik
              initialValues={userData}
              onSubmit={submitForm}
            >
              {(SignupForm) => (
                <form onSubmit={SignupForm.handleSubmit}>
                  <label > FIRST NAME </label>
                  <span style={{ fontsize: 10, marginleft: '10px', color: 'red' }}> {SignupForm.touched.firstname && SignupForm.errors.firstname}</span>
                  <input id='firstname' onChange={SignupForm.handleChange} value={SignupForm.values.firstname} type="text" class="form-control" placeholder="First Name" />
                  <label> LAST NAME </label>
                  <span style={{ fontsize: 10, marginleft: '10px', color: 'red' }}>{SignupForm.touched.lastname && SignupForm.errors.lastname}</span>
                  <input id='lastname' onChange={SignupForm.handleChange} value={SignupForm.values.lastname} type="text" class="form-control" placeholder="Last Name" />
                  <label> EMAIL </label>
                  <span style={{ fontsize: 10, marginleft: '10px', color: 'red' }}>{SignupForm.touched.email && SignupForm.errors.email}</span>
                  <input id='email' onChange={SignupForm.handleChange} value={SignupForm.values.email} type="text" class="form-control" placeholder="Email" />
                  <label> PASSWORD </label>
                  <input id='password' onChange={SignupForm.handleChange} value={SignupForm.values.password} type="password" class="form-control" placeholder="Password" />
                  <button type="submit" class="btn btn-danger w-100"> submit </button>
                </form>
              )}
            </Formik> : <h1>Loading ... </h1>
        }
      </div>
    </div>
  )
}

export default Updateuser