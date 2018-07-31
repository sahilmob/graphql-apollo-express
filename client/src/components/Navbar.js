import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
          <NavbarAuth />
        </nav>
    )
}

const NavbarAuth = () => (
    <ul>
      <li>
        <NavLink to="/" exact>Home</NavLink>
      </li>
      <li>
        <NavLink to="/search">Search</NavLink>
      </li>
      <li>
        <NavLink to="/recipe/add">Add Recipe</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <button>Log out</button>
      </li>
    </ul>
)

const NavbarUnAuth = () => (
    <ul>
      <li>
        <NavLink to="/" exact>Home</NavLink>
      </li>
      <li>
        <NavLink to="/search">Search</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Sign in</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign up</NavLink>
      </li>
    </ul>
);



export default Navbar;
