import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav nav-pills justify-content-center p-2 shadow">
			<NavLink
				to="/"
				className={({ isActive }) => `nav-link ${isActive && 'active'}`}>
				Home
			</NavLink>
			<NavLink
				to="/films"
				// example with ternary operator
				className={({ isActive }) => `nav-link ${isActive && 'active'}`}>
				Films
			</NavLink>
      <NavLink
				to="/people"
				// example with ternary operator
				className={({ isActive }) => `nav-link ${isActive && 'active'}`}>
				People
			</NavLink>
		</div>
  )
}

export default Navbar;
