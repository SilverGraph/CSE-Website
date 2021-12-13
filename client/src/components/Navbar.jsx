import React , {useState} from 'react';
import { FaBars , FaTimes } from 'react-icons/fa';
import {IconContext} from "react-icons";
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import './Navbar.css';
import axios from "axios"

function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  async function handleLogout(){
    await axios({
      method: 'get',
      url: 'http://127.0.0.1:5000/api/logout',
      // data: formData,
      // headers:{"Content-Type": "multipart/form-data"}, 
      withCredentials: true
    }).then((props) => {
      console.log(props)
      window.reload()
    }).catch(function (response) {
      console.log(response);
    });
  }

   return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark nav-Bar">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <IconContext.Provider value={{color: 'white', size: 30}}>
    <span onClick={handleClick}>{click ?<FaTimes/>: <FaBars/>  }</span>
    </IconContext.Provider>
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
      
      {props.isAuth ? 
        <Button onClick={handleLogout}>Logout</Button> :
        <Button onClick={() => window.location="/login"}>Login</Button>
      }
      
    </div>
  </div>
  
</nav>    
    </>
  );
};

export default Navbar;
