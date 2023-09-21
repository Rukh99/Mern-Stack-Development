import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({mycart ,loggedin}) => {
  
  console.log(mycart);

  const showloginoption= () =>{
    if(loggedin)
    {
      return(
        <li className='nav-item'>
        <button className="btn -btn danger"> Logout </button>
        </li>
      )
    }

  }

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-danger ">   
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link " to ="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to ="/Login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to ="/Signup">
            Signup 
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to ="/event">
          EventHandling 
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to ="/ContactUs">
          ContactUs
        </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to ="/state">
       StateManagement
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to ="/post">
       post  
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to ="/todo">
       TODO LIST  
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to ="/Chat">
       Chat  
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to ="/Productlisting">
       Productlist 
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to ="/Reels">
       REELS 
      </NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to ="/chatting">
     CHAT-BOX  
    </NavLink>
  </li>
  <li className="nav-item">
    <h4> Cart items :{mycart} </h4>
  </li>
   {showloginoption()}
     </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  
    </div>
  )
}

export default Navbar
