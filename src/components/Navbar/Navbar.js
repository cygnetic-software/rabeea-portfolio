import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/signature.png";
const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        navBackground ? "bg-light" : "bg-transparent"
      } `}
    >
      <div className="container">
        <Link
          className={`navbar-brand ${
            navBackground ? "text-dark" : "text-light"
          }`}
          to="#"
        >
          <img
            src={logo}
            style={{ filter: navBackground ? "invert(0)" : "invert(100%)" }}
            alt="Rabeea's Portfolio Logo"
            height={70}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-2">
              <Link
                className={`nav-link ${
                  navBackground ? "text-dark" : "text-light"
                }`}
                to="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link
                className={`nav-link ${
                  navBackground ? "text-dark" : "text-light"
                }`}
                to="#"
              >
                About
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link
                className={`nav-link ${
                  navBackground ? "text-dark" : "text-light"
                }`}
                to="#"
              >
                Services
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link
                className={`nav-link ${
                  navBackground ? "text-dark" : "text-light"
                }`}
                to="#"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link
                className={`nav-link ${
                  navBackground ? "text-dark" : "text-light"
                }`}
                to="#"
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <button
                className={`btn ${
                  navBackground ? "btn-outline-dark" : "btn-outline-light"
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
