import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header>
      <img src="./images/Logo.png" alt="digitf" />
      <nav className={active ? "active" : ""}>
        <ul className="flex-center">
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
        </ul>

        <div className="user-option flex-center">
          <button className="flex-center">
            <span className="material-symbols-rounded">person</span>
            <span>Login</span>
          </button>

          <Search />
        </div>
      </nav>

      <button
        className={`custom-menu ${!active ? "closed" : "opened"}`}
        onClick={() => setActive(!active)}
      >
        <span className="s-1"></span>
        <span className="s-2"></span>
        <span className="s-3"></span>
      </button>
    </header>
  );
};

export default Header;
