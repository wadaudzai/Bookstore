import React from 'react';
import '../Styling/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <ul>
      <li><Link to="/">Books</Link></li>
      <li><Link to="/Categories">Categories</Link></li>
    </ul>
  </nav>
);

export default Navbar;
