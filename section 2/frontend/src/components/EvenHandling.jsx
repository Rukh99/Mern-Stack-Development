import React from 'react'

const EvenHandling = () => {
  return (
    <div class= "container">
      <h1 className="text-center"> EvenHandling </h1>
      
      <h4> Click event </h4>
      <button className="btn btn-primary" onClick={() => {alert("BUTTON was click")}}> click here </button>
    </div>
  )
}

export default EvenHandling
