import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <header>
      <div className="flex-center">
        <img src="./images/Logo.png" alt="digitf" />
        <nav className="flex-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/furniture">Furniture</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </nav>
      </div>

      <div className="flex-center">
        <div className="user-option flex-center">
          <button className="flex-center">
            <img src="./images/user.png" alt="user-logo" />
            <span>Login</span>
          </button>

          <Search />
        </div>

        <button className="custom-menu">
          <span className="s-1"></span>
          <span className="s-2"></span>
          <span className="s-3"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
