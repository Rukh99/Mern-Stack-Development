import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './Login';

function App() {
  return (
    <div> 
    <h1>My React APP </h1>
    <h3 className='myclass'> Using Class name </h3>

    <Home ></Home>
    <Signup></Signup>
    <Login> </Login>
    </div>
    
  );
}

export default App;
