import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import avatar from '../avatar.svg';

const Navbar = () => (
  <>
    <header>
      <nav className="navbar">
        <h2 className="logo">Bookstore CMS</h2>
        <ul>
          <li className="books-link">
            <NavLink to="/">BOOKS</NavLink>
          </li>
          <li className="categories">
            <NavLink to="/categories">CATEGORIES</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <img src={avatar} alt="Avatar" />
      </div>
    </header>
    <hr className="line" />
  </>
);

export default Navbar;