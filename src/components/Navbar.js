import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h2>Bookstore Application</h2>
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active-link" exact>
            BOOKS
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" activeClassName="active-link">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
