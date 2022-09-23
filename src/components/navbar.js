import React from 'react';
import '../Styling/Navbar.css';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const Navbar = () => (
  <div className="navbar">
    <nav className="navBar">
      <h1 className="header-main">Bookstore CMS</h1>
      <ul>
        <li className="links"><Link to="/">Books</Link></li>
        <li className="links"><Link to="/Categories">Categories</Link></li>
      </ul>
    </nav>
    <div className="profile">
      <img src={user} alt="user" className="image-user" />
    </div>
  </div>
);

export default Navbar;
