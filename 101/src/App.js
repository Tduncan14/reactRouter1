import React from 'react';
import './App.css';
import{Link,BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
