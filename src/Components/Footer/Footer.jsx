import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <p>&copy; {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
      <p>Made with ❤️ by Your Team</p>
    </div>
  );
};

export default Footer;
