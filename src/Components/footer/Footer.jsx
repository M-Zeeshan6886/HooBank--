import React from "react";
import "./Footer.scss";
import logo from '../../assets/NavAssets/logo.png'
import FooterIcons from '../../assets/homeAssets/footericon.png'

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-content1">
          <div className="footer-container-content1-col1">
            <div className="footer-container-content1-col1-logo">
              <img src={logo} alt="logo " />
              <p>Hoo</p>
              <span>Bank</span>
            </div>
            <p>A new way to make the payments easy, reliable and secure.</p>
          </div>
          <div className="footer-container-content1-col2">
            <h2>Usefull Link</h2>
            <p>Content</p>
            <p>How it works</p>
            <p>Create</p>
            <p>Explore</p>
            <p>Terms & Services</p>
          </div>
          <div className="footer-container-content1-col3">
            <h2>Community</h2>
            <p>Help Center</p>
            <p>Partners</p>
            <p>Suggestions</p>
            <p>Blog</p>
            <p>Newsletters</p>
          </div>
          <div className="footer-container-content1-col4">
            <h2>Partner</h2>
            <p>Our Partner</p>
            <p>Become a Partner</p>
          </div>
        </div>
        <div className="footer-container-content2">
          <div className="footer-container-content2-left">
            <p>Copyright © 2021 HooBank. All Rights Reserved. </p>
          </div>
          <div className="footer-container-content2-right">
            <img src={FooterIcons} alt="FooterIcons" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
