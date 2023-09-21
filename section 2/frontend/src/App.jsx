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

function App() {

  let Cartitems=5;
  const [loggedin, setLoggedin] = useState(false)
  return (
    <div>



      <BrowserRouter>
        <Navbar mycart={Cartitems} loggedin={loggedin}/>
<Routes>
          <Route path="/" element={<Home />} />
          
          
          <Route path="/event" element={<EvenHandling/> }/>
          <Route path="/login" element={<Login setLoggedin={setLoggedin}/>} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/state" element={<StateManagement />}/>
          <Route path="/Post" element={<Post/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/productlisting" element={<Productlisting/>} />
          <Route path="/reels" element={<Reels/>}/>
          <Route path="/chatting" element={<Chatting/>}/>

          

          
        
        

          <Route path="*" element={<Notfound/>}/>

          </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
