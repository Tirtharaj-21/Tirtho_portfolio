import React from "react";
import "../styling/footer.css";
import cpyrt from "../Removbg/cpyrt.png";
import email from "../Removbg/email.png";
import linkedln from "../Removbg/linkedln.png";
const Footer = () => {
  return (
    <>
      <hr className="nav-divider" />
      <div className="footer-container">
        <div className="myfooter">
          <div className="picbox">
            <img src={cpyrt} alt="" />
          </div>
          <h3 className="footer-text">
            2026 Tirtharaj Goswami. Built with passion and modern web
            technologies.
          </h3>
        </div>
        <div className="icon">
          <div>
            <img src={email} alt="email" />
          </div>
          <div>
            <img src={linkedln} alt="linkedln" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
