import React, { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import logo from "../../assets/img/logo/signature.png";
import { useData } from "../../context/DataProvider";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const { BringIntoView, current } = useData();

  const transitionNavbar = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  const clickHander = (id) => {
    BringIntoView(id);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  const classnamefunction = (item) => {
    if (current === item) {
      return navBackground ? "active text-dark" : "active text-light";
    } else {
      return navBackground ? "text-dark" : "text-light";
    }
  };
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        navBackground ? "bg-light" : "bg-transparent"
      } `}
    >
      <div className="container">
        <a
          className={`navbar-brand ${classnamefunction()}`}
          to="#"
          onClick={(e) => {
            e.preventDefault();
            clickHander("#landingSection");
          }}
        >
          <img
            src={logo}
            style={{ filter: navBackground ? "invert(0)" : "invert(100%)" }}
            alt="Rabeea's Portfolio Logo"
            height={70}
          />
        </a>
        <button
          className={`navbar-toggler ${
            navBackground ? "text-dark" : "text-light"
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon `}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-2">
              <a
                className={`nav-link ${classnamefunction("#landingSection")}`}
                href="#landingSection"
                onClick={(e) => {
                  e.preventDefault();
                  clickHander("#landingSection");
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item me-2">
              <a
                className={`nav-link ${classnamefunction("#aboutSection")}`}
                href="#aboutSection"
                onClick={(e) => {
                  e.preventDefault();
                  clickHander("#aboutSection");
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item me-2">
              <a
                className={`nav-link ${classnamefunction("#servicesSection")}`}
                href="#servicesSection"
                onClick={(e) => {
                  e.preventDefault();
                  clickHander("#servicesSection");
                }}
              >
                Services
              </a>
            </li>
            <li className="nav-item me-2">
              <a
                className={`nav-link ${classnamefunction("#portfolioSection")}`}
                href="#portfolioSection"
                onClick={(e) => {
                  e.preventDefault();
                  clickHander("#portfolioSection");
                }}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item me-2">
              <a
                className={`nav-link ${classnamefunction(
                  "#testimonialSection"
                )}`}
                href="#testimonialSection"
                onClick={(e) => {
                  e.preventDefault();
                  clickHander("#testimonialSection");
                }}
              >
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <button
                onClick={(e) => {
                  clickHander("#contactSection");
                }}
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
