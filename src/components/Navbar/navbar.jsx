import React from 'react';
import "./navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
