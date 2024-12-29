import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Shopping</Link>
      <Link to="/buy">My Cart</Link>
    </nav>
  );
};

export default Navbar;
