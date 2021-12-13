import React , {useState} from 'react';
import { FaBars , FaTimes } from 'react-icons/fa';
import {IconContext} from "react-icons";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
   return (
    <>
    
    <nav class="navbar navbar-expand-lg navbar-dark nav-Bar">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <IconContext.Provider value={{color: 'white', size: 30}}>
    <span onClick={handleClick}>{click ?<FaTimes/>: <FaBars/>  }</span>
    </IconContext.Provider>
    </button>
    <div class="collapse navbar-collapse Container" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <NavLink to="/" exact activeClassName="active">
       <a className='nav-link' href="/">Home</a>
      </NavLink>
      <NavLink to="/Students" activeClassName="active">
       <a className="nav-link" href="/Students">Students</a>
      </NavLink>
      <NavLink to="/Resources" activeClassName="active">
      <a className="nav-link" href="/Resources">Resources</a>
      </NavLink>
        
         
      </div>
      <div className="Buttons">
      <a href="/Login" className='btn btn-outline-light'> Login</a>
      <a href="#" className='btn btn-outline-light'> Logout</a>
      </div>
      
    </div>
  </div>
  
</nav>    
    </>
  );
};

export default Navbar;
