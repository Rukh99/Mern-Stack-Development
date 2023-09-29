import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Notfound from './Notfound';
import Navbar from './components/Navbar';
import EvenHandling from './components/EvenHandling';
import ContactUs from './components/ContactUs';
import StateManagement from './components/StateManagement';
import Post from './components/Post';
import Todo from './components/Todo';
import Chat from './components/Chat';
import Productlisting from './components/Productlisting';
import ReelsList from './components/dummy';
import Reels from './components/Reels';
import Chatting from './components/Chatting';
import { useState } from 'react';
import { AppProvider } from './AppContext';
import UserAuth from './UserAuth';
import Product from './components/Product';
import Usermanager from './components/Usermanager';
import { Toaster } from 'react-hot-toast';
import Updateuser from './components/Updateuser';

function App() {

  let Cartitems=5;
 
  return (
    <div>
    <Toaster position ="top-right">
    
    </Toaster>



      <BrowserRouter>
      <AppProvider>
        <Navbar mycart={Cartitems}/>
<Routes>
          <Route path="/" element={<Home />} />
          
          
          <Route path="/event" element={<EvenHandling/> }/>
          <Route path="/login" element={<Login/>} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/state" element={<StateManagement />}/>
          <Route path="/Post" element={<Post/>} />
          <Route path="/todo" element={<UserAuth> <Todo/> </UserAuth>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/productlisting" element={<Productlisting/>} />
          <Route path="/reels" element={<Reels/>}/>
          <Route path="/chatting" element={<Chatting/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/usermanager" element={<Usermanager/>}/>
          <Route path="/updateuser/:id" element={<Updateuser/>}/>
          
          


          

          
        
        

          <Route path="*" element={<Notfound/>}/>

          </Routes>
          </AppProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
