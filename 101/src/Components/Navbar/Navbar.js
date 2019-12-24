import './Navbar.css'
import React,{Component}from 'react';
import {Link}from 'react-router-dom';
import Home from '../../Components/Home';
import About from '../../Components/About';


class Navbar extends Component {







    render(){


        return(
            <nav className="black">
            <div class="nav-wrapper">
              <Link href="#" class="brand-logo right">Logo</Link>
              <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><Link exact to="/" >Home</Link></li>
                <li><Link exact to ="/about" >About</Link></li>
                <li><Link exact to ="/signup">Sign up</Link></li>
                <li><Link exact to ="/signup">Log out</Link></li>
              </ul>
            </div>
          </nav>
        )
    }
}


export default Navbar;