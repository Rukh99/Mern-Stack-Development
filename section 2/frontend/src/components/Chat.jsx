import React, { useState } from 'react'

const Chat = () => {
const [user, setChat] = useState([])
const chatting = (p) => {
if (p.code ==='Enter')
        {
            console.log(p.target.value);
            // todolist.push(e.target.value);
            setChat([...user, p.target.value]);
            console.log([...user,p.target.value]);

            p.target.value="";

        
        }
    }
  return (
    <div>
      <h1 class="text-center"> CHATS </h1>
      <div class="container mx-auto bg-success text-blue">
      <div className='col-md-6 mx-auto'>
      <div class="form-group">
      
      <header> <h3 class='p-3'> USER NAME </h3> <i class="fa-solid fa-arrow-left "></i> <i class="fa-solid fa-user-ninja"></i></header>
      <div className='card-body'>
        {user.map((Chat) =>{return<div className='d-flex justify-content-between mb-4'>
        <p>{Chat}</p>
        
        </div>})}
      <input type="text" class="form-control" placeholder="Enter your message" onKeyPress={chatting}/>
      <div className='buttons btn btn-dark my-2'>
      <button ><i class="fa-solid fa-microphone fa-2x" style={{color: 'red'}} ></i></button>
      <button> <i class="fa-solid fa-plus"></i></button>
      <button><i class="fa-sharp fa-solid fa-message-smile"></i></button>
      
      </div>
      
      </div>
      

      
      
      </div>
        

    
        
        
        


        
</div>

      </div>
</div>
    
  )
}

export default Chat

