import React  from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
   return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark nav-Bar">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
   
    <span className="navbar-toggler-icon"></span>

    </button>
    <div className="collapse navbar-collapse Container" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <NavLink to="/" exact activeClassName="active">
      Home
       {/* <a className='nav-link' href="/">Home</a> */}
      </NavLink>
      <NavLink to="/Students" activeClassName="active">
      Students
       {/* <a className="nav-link" href="/Students">Students</a> */}
      </NavLink>
      <NavLink to="/Resources" activeClassName="active">
      Resources
      {/* <a className="nav-link" href="/Resources">Resources</a> */}
      </NavLink>
        
         
      </div>
      <div className="Buttons">
      <a href="/Login" className='btn btn-outline-light'> Login</a>
      {/* <a href="#" className='btn btn-outline-light'> Logout</a> */}
      </div>
      
    </div>
  </div>
  
</nav>    
    </>
  );
};

export default Navbar;
