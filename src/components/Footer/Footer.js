import React from "react";
import logo from "../../assets/img/logo/signature.png";
import { useData } from "../../context/DataProvider";
const Footer = () => {
  const { BringIntoView } = useData();
  const clickHander = (id) => {
    BringIntoView(id);
  };
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="text-center">
              <img
                src={logo}
                style={{ filter: "invert(100%)" }}
                alt=""
                height={150}
                width={150}
              />
            </div>
            <h4>About Me</h4>
            <p>
              Rabeea Aftab, a creative content writer with 6 years of
              experience. I craft compelling content that engages readers and
              provides value. I'm passionate about helping businesses grow by
              creating unique content that targets their audience and achieves
              their goals.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li className="my-4">
                <a
                  href="#landingSection"
                  className="text-light"
                  onClick={(e) => {
                    e.preventDefault();
                    clickHander("#landingSection");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="my-4">
                <a
                  href="#aboutSection"
                  className="text-light"
                  onClick={(e) => {
                    e.preventDefault();
                    clickHander("#aboutSection");
                  }}
                >
                  About
                </a>
              </li>
              <li className="my-4">
                <a
                  href="#servicesSection"
                  className="text-light"
                  onClick={(e) => {
                    e.preventDefault();
                    clickHander("#servicesSection");
                  }}
                >
                  Services
                </a>
              </li>
              <li className="my-4">
                <a
                  href="#portfolioSection"
                  className="text-light"
                  onClick={(e) => {
                    e.preventDefault();
                    clickHander("#portfolioSection");
                  }}
                >
                  Portfolio
                </a>
              </li>
              <li className="my-4">
                <a
                  href="#testimonialSection"
                  className="text-light"
                  onClick={(e) => {
                    e.preventDefault();
                    clickHander("#testimonialSection");
                  }}
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4" id="contactSection">
            <h4>Contact Me</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="contactName" className="form-label">
                  Your Name
                </label>
                <input type="text" className="form-control" id="contactName" />
              </div>
              <div className="mb-3">
                <label htmlFor="contactEmail" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="contactEmail"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactMessage" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="contactMessage"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-light">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">
              <a href="mailto:raftab200@gmail.com" className="text-light me-4">
                <i className="bi bi-envelope-fill"></i> Email
              </a>
              <a
                href="https://www.linkedin.com/in/rabeea-aftab-53880a1b5/"
                className="text-light me-4"
              >
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://github.com/YOUR_GITHUB"
                className="text-light me-4"
              >
                <i className="bi bi-github"></i> Github
              </a>
              <a href="https://twitter.com/YOUR_TWITTER" className="text-light">
                <i className="bi bi-twitter"></i> Twitter
              </a>
            </p>
            <p className="mb-0">
              &copy; 2023 Rabeea Aftab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
