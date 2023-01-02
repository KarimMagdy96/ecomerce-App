import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/eco-logo.png";
import { NavLink } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";

const navLink = [
  {
    path: "home",
    display: "Home",
  },
  { path: "shop", display: "Shop" },
  { path: "cart", display: "Cart" },
];
export default function Header() {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="row">
            <div className="navWraaper">
              <div className="logo">
                <img src={logo} alt="logo" />
                <div className="logoName">
                  <h1>KMarket</h1>
                </div>
              </div>

              <div className="navigation">
                <ul className="menu">
                  {navLink.map((link, i) => (
                    <li key={i}>
                      <NavLink to={link.path}>{link.display}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="navIcon">
                <span className="favIcon">
                  <i class="ri-heart-line"></i>
                  <span className="badge">1</span>
                </span>
                <span className="cartIcon">
                  <i class="ri-shopping-bag-line"></i>
                  <span className="badge">1</span>
                </span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt="user icon"
                />
              </div>
              <div className="mobilMenu">
                <span>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
