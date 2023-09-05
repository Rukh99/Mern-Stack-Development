import React from 'react'

const ContactUs = () => {
  return (
    
<form>
<div class="card mx-auto ">
<div class="card body">
<label> ENTER YOUR NAME </label>
<input type="text" class="form-control" placeholder="Enter your name"/>
<label> ENTER YOUR EMAIL </label>
<input type="text" class="form-control" placeholder="Enter your email"/>

<label> TYPE YOUR MESSAGE </label>

<textarea class="form-control" rows="3"></textarea>
<button> SUBMIT </button>
</div>

</div>
</form>
  )
}

export default ContactUs
