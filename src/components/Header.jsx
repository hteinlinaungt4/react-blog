import React from 'react'
import {Container,Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={({ isActive }) => isActive ? "mx-3 text-decoration-none text-primary" : "mx-3 text-decoration-none text-white"}  to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "mx-3 text-decoration-none text-primary" : "mx-3 text-decoration-none text-white"} to="/addblog">Add Blog</NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header

