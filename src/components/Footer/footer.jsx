import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <span className="footer-part1">Payment Fusion Hub by Bayanat</span>
        <span className="footer-part2">
          © 2023 - {new Date().getFullYear()} Bayanat. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
