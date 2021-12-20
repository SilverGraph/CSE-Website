import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { Container, Navbar, Nav } from 'react-bootstrap';
import "./Navbar.css";
import axios from "axios";

export default function NavBar() {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      await axios({
        method: "get",
        url: "https://cse-2k25.herokuapp.com/api/checklogin",
        withCredentials: true,
      })
        .then((response) => {
          console.log(response.data.Status + " hekllo");
          setAuth(response.data.Status);
        })
        .catch(function (response) {
          console.log(response);
        });
    }
    checkAuth();
  }, [auth]);

  async function handleLogout() {
    await axios({
      method: "get",
      url: "https://cse-2k25.herokuapp.com/api/logout",
      // data: formData,
      // headers:{"Content-Type": "multipart/form-data"},
      withCredentials: true,
    })
      .then(() => {
        console.log();
        window.location = "/";
      })
      .catch(function (response) {
        console.log(response);
      });
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" exact className="active" activeClassName="navlink-hover">
                Home
              </NavLink>
              <NavLink to="/Students" className="active" activeClassName="navlink-hover">
                Students
              </NavLink>
              <NavLink to="/Resources" className="active" activeClassName="navlink-hover">
              Societies
              </NavLink>
            </Nav>
            <Nav>
              <Nav.Link>
              {auth ? (
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button color="inherit">Login</Button>
                </Link>
              )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
