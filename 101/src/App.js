import React from 'react';
import './App.css';
import{Link,BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Help from './Components/Help';


function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/help" component={Help}/>
      <Route exact path="/loginin" component={Login}/>
      <Route exact path="/signup" component={Signup}/>

    </Router>
  );
}

export default App;
