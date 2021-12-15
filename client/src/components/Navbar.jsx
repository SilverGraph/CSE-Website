import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import './Navbar.css';
import axios from "axios"

export default function Navbar() {
  const [auth, setAuth] = useState(true)

  useEffect(() => {
    async function checkAuth() {
      await axios({
          method: 'get',
          url: 'https://cse-2k25.herokuapp.com/api/checklogin',
          withCredentials: true
      }).then((response) => {
          console.log(response.data.Status + " hekllo")
          setAuth(response.data.Status)
      }).catch(function (response) {
          console.log(response);
      });
    }
    checkAuth()
  }, [auth])

  async function handleLogout() {
    await axios({
      method: 'get',
      url: 'https://cse-2k25.herokuapp.com/api/logout',
      // data: formData,
      // headers:{"Content-Type": "multipart/form-data"}, 
      withCredentials: true
    }).then(() => {
      console.log()
      window.location = "/"
    }).catch(function (response) {
      console.log(response);
    });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav-Bar">
        <div style={{ position: 'relative' }} className="container-fluid">
          <button style={{ position: 'absolute', right: '0' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

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
            {auth ?
              <Button color="inherit" onClick={handleLogout}>Logout</Button> :
              <Link to="/login" style={{ textDecoration: "none" }}><Button color="inherit">Login</Button></Link>
            }
          </div>
        </div>

      </nav>
    </>
  );
};