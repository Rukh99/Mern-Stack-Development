import React, { useState } from 'react'

const StateManagement = () => {
 
 let count=2;

 const [likes, setLikes] = useState(0);
 
 
    return (
    <div className='container'>
      <h1 className='text-center'> StateManagement</h1>
      <hr/>

      <button className='btn btn-primary' onClick={() =>{count++; console.log(count);}}>Addcount</button> 
      
      <h1>{count}</h1>

      <button className='btn btn-success mt-4' onClick={()=>{setLikes(likes+1)}}> {likes}</button>
    

    </div>
  )
}

export default StateManagement
