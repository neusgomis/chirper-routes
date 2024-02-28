import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav nav-pills justify-content-between align-items-center p-2 shadow">
      <Link to="/" className="navbar-brand">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="ghibli logo"></img>
      </Link>
      <div className="links d-flex">
        <NavLink
          to="/"
          className={({ isActive }) => `btn nav-link ${isActive && 'active'}`}>
          Home
        </NavLink>
        <NavLink
          to="/films"
          className={({ isActive }) => `btn nav-link ${isActive && 'active'}`}>
          Films
        </NavLink>
        <NavLink
          to="/people"
          className={({ isActive }) => `btn nav-link ${isActive && 'active'}`}>
          People
        </NavLink>
      </div>
		</div>
  )
}

export default Navbar;
