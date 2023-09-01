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

function App() {
  return (
    <div>



      <BrowserRouter>
        <Navbar/>
<Routes>
          <Route path="/" element={<Home />} />
          
          
          <Route path="/event" element={<EvenHandling/> }/>
          <Route path="/login" element={<Login/>} />
          <Route path={"/ContactUs"}element={<ContactUs />} />
          <Route path={"Signup"} element={<Signup />} />
          <Route path="*" element={<Notfound/>}/>

          </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
