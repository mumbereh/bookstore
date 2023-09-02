import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import avatar from '../avatar.svg';

const Navbar = ({ username }) => (
  <header className="navbar">
    <h2 className="logo">Bookstore CMS</h2>
    <nav>
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink exact to="/" activeClassName="active">
            BOOKS
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/categories" activeClassName="active">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="user-avatar">
      <img src={avatar} alt="User Avatar" />
      <span className="username">{username}</span>
    </div>
    <hr className="line" />
  </header>
);

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Navbar;
