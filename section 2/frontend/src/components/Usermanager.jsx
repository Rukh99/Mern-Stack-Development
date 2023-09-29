import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Usermanager = () => {



  const [userlist, setuserlist] = useState([])

 

  const getUserData = async () => {
    const res = await fetch('http://localhost:5000/user/getall')
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setUserList(data);
  }
  useEffect(() => {

    // when component open 
    getUserData();


    return () => {
      // alert('this component is about to close')
      // when component close

    }
  }, [])

  const deleteuser = async (id) => {
    const res = await fetch('http://localhost:5000/user/delete/' + id,
      {
        method: 'DELETE',


      });
    console.log(res.status);
    {
      if (res.status === 200)
        getUserData()
    };
    toast.success('USER DELETED SUCCESSFULLY ')

    //console.log(id);
  }

  return (
    <div className='vh-100 bg-body-secondary'>
      <div className='container py-4'>
        <h1 className='text-center'>User Manager
        </h1>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Id  </th>
              <th>Name  </th>
              <th>EMAIL </th>
              <th>PASSWORD  </th>
              <th colspan={2}> Action </th>
            </tr>
          </thead>
          <tbody>
            {
              userlist.map((user, index) =>
              (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>

                    <Link to={"/Updateuser/" + user._id} className='btn btn-danger'> EDIT </Link>
                  </td>
                  <td>

                    <button onClick={() => { deleteuser(user._id) }} className='btn btn-danger'> Delete</button>
                  </td>




                </tr>

              ))
            }

          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Usermanager