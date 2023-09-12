import React, { useState } from 'react'
import ReelsList from './dummy';


function Reels() {
  return (
    <div>
      <h1>Dummy Data Example</h1>
      <ul>
        {ReelsList.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>
            <div className='card' style={{ overflow: 'hidden' }}>
            <img src={item.image} className='w-75 "img-fluid"  ' alt='...' />
            </div>
          
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reels;