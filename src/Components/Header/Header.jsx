import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/eco-logo.png";
import { NavLink } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const navLink = [
  {
    path: "home",
    display: "Home",
  },
  { path: "shop", display: "Shop" },
  { path: "cart", display: "Cart" },
];
export default function Header() {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.Cart.totalQuantity);
  const menuRef = useRef(null);
  const stickyHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticyHeader");
      } else {
        headerRef.current.classList.remove("sticyHeader");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunction();
    return () => window.removeEventListener("scroll", stickyHeaderFunction);
  });
  const menuToggle = () => {
    menuRef.current.classList.toggle("activeMenu");
  };
  return (
    <header ref={headerRef}>
      <nav>
        <div className="container">
          <div className="row">
            <div className="navWraaper">
              <NavLink to="home">
                <div className="logo">
                  <img src={logo} alt="logo" />
                  <div className="logoName">
                    <h1>KMarket</h1>
                  </div>
                </div>
              </NavLink>

              <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="menu">
                  {navLink.map((link, i) => (
                    <li key={i}>
                      <NavLink
                        to={link.path}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        {link.display}
                      </NavLink>
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
                  <NavLink to="cart" onClick={() => window.scrollTo(0, 300)}>
                    <i class="ri-shopping-bag-line"></i>
                    <span className="badge">{totalQuantity}</span>
                  </NavLink>
                </span>
                <span>
                  <motion.img
                    whileTap={{ scale: 1.2 }}
                    src={userIcon}
                    alt="user icon"
                  />
                </span>
                <div className="mobilMenu">
                  <span onClick={menuToggle}>
                    <i class="ri-menu-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
