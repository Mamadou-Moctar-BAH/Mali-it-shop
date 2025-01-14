// Librairy
import React from "react";
// Css external
import "./Header.css";

//JSX
const Navbar = (props) => {
  return (
    <div>
      <header>
        {/*Navbar */}
        <nav className="navbar">
          <div className="logo">
            <img src={props.myLogo} alt="Logo" className="logo-image" />
          </div>
          {/* Link social Media */}
          <div className="social-links">
            <a
              href="https://wa.me/76468320" // link whatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <i className="fab fa-whatsapp"></i> {/* icon whatsApp*/}
            </a>
            <a
              href="https://www.facebook.com/malinformatiqueshop" // link facebook
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <i className="fab fa-facebook"></i> {/*icon facebook*/}
            </a>
            <a
              href="https://instagram.com/yourprofile" // add link instagram
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <i className="fab fa-instagram"></i> {/*icon instagram */}
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
