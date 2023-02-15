import React from 'react'
import './Navbar.scss';
import Logo from '../../assets/NavAssets/logo.png';
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-container-content">
          <div className="navbar-container-content-left">
            <img src={Logo} alt="Logo" />
            <p>Hoo</p>
            <span>Bank</span>
          </div>
          <div className="navbar-container-content-right">
            <p>Home</p>
            <p>About Us</p>
            <p>Features</p>
            <p>Solution</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar