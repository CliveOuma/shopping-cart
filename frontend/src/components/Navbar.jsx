import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./Navbar.css";
import { FaBars, FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);
  const state = useSelector(state => state.handleCart)



  const cart = (
    <NavLink to="/cart" className="nav-links">
      <FaShoppingCart size={20} />
      ({state.length})
    </NavLink>
  );

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <h2>StarShop</h2>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/shop"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <NavLink to="/register" className="nav-links">
              <FaUser size={20} />
            </NavLink>
            {cart}
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <FaTimes size={28} />{" "}
              </span>
            ) : (
              <span className="icon">
                <FaBars size={26} />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;