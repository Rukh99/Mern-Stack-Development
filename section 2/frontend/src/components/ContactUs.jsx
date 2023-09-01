import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <header className="now">
      <h1>Contact Us</h1>
      <h5> PlZ FILL THIS FORM  IN A DECENT MANNER </h5>
    
      </header>
      
      <form>
      <label> FULL NAME </label>
      <input type="text" name="name" placeholder='ENTER YOUR FULL NAME'      />
      <br></br>
      <label> EMAIL</label>
      <input type="text" name="name" placeholder='ENTER YOUR EMAIL' />
      <br></br>
      <label> MESSAGE </label>
      <input type="text" name="name" placeholder='ENTER YOUR MESSAGE' />
<br></br>
<button className="btn btn-primary" onClick={() => {alert("BUTTON was click")}}> click here </button>
      </form>
    </div>
  )
}

export default ContactUs
