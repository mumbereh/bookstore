import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h2>Bookstore CMS</h2>
    <nav>
      <ul>
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
