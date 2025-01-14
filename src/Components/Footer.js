// Library
import React, { useState } from "react";

// Css External
import "./Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for sending data
    console.log("Form Data Submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h2>About us</h2>
          <p>
            We provide quality IT services, professional training and hardware
            tailored to your needs.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Mali Info Shop. All rights
            reserved!
          </p>
        </div>
        <div className="footer-contact">
          <h2>Contact us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="footer-social">
          <h2>Follow us</h2>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/malinformatiqueshop"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
