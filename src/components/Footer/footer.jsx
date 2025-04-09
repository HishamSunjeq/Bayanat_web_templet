import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>&copy; {new Date().getFullYear()} Bayanat. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
