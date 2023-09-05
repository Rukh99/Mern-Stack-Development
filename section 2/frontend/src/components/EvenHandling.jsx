import React from 'react'

const EvenHandling = () => {
  return (
    <div class= "container">
      <h1 className="text-center"> Event Handling </h1>
      
      <h4> Click event </h4>
      <button className="btn btn-primary" onClick={() => {alert("BUTTON was click")}}> click here </button>

      <input type="text" className="form-control mt-4"  onChange={(e)=> {console.log(e.target.value)}}></input>

      <input type="color" className="form-control mt-4" onChange={(e)=>{document.body.style.backgroundColor = e.target.value}}></input>
<input type="range"></input>
    </div>
  )
}

export default EvenHandling
