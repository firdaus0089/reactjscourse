import './App.css';
import React from 'react'
import { Nav, Navbar, NavLink } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import TimeInfo from './TimeInfo';

const Navigationbar = () => {
  const location = useLocation();
  const userData = JSON.parse(sessionStorage.getItem('userName'));

  const clearStorage = (e) => {
    e.preventDefault();
    sessionStorage.clear("userName");
    alert('Session storage has been cleared');
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
        <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{ width: "100%" }} activeKey={location.pathname}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/movies">Movies</NavLink>
            <NavLink href="/product">Product</NavLink>
            <NavLink href="/about/defaultname">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/registration" style={userData ? {visibility:"hidden",display:"none"}: {}}>Registration</NavLink>
            <NavLink href="/editregistration" style={userData ? {} : {visibility:"hidden",display:"none"}}>Edit Registration</NavLink>
            <NavLink href="/login" style={userData ? {visibility:"hidden", display:"none"}: {}}>Login</NavLink>
            <NavLink href="#" onClick={clearStorage} style={userData ? {}: {visibility:"hidden",display:"none"}} className="btn btn-dark">Logout</NavLink>
            
            <NavLink className='ms-auto'><TimeInfo /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigationbar
