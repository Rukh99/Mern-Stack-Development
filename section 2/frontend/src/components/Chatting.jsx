import React, { useRef, useState } from 'react'

const Chatting = () => {

    const inputREF =useRef(null);

    
    

    
    const [first, setFirst] = useState([
        {
            id: 1,
            name: 'first',
            message: 'Hello, how are you?',
            sent: 'false',
        },

        {
            id: 2,
            name: 'second',
            message: 'Hello, how are you?',
            sent: 'true',
        }

    ]);
    const sendMessage =() =>
    {
        const messageText=inputREF.current.value;
        console.log(messageText);
        setFirst = ([...first,{text:messageText,sent:true}])

        inputREF.current.value='';
            
    }
    return (
        <div className='container py-5'>

            <h1 className=''> MY MESSENGER </h1>

            <div className='card'>
                <div className='card-body chat-container '>
                    {
                        first.map((message) => {
                            return <div className={`msg${message.sent?'msg-sent':'msg-rec'}`}>
                             {message.text}</div>
                        }
                        )

                    }


                </div>
                <div className='card-footer'>
                    <div className='input-group'>
                        <input type='text' className='font-control' ref={inputREF} />
                        <button  onclick={sendMessage}className='btn btn-dark'>
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Chatting;