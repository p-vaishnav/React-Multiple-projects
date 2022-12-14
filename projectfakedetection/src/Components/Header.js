import React from "react";
import './header.css';
const Header = () => {
  return (
    <div class="header">
      <a href="#default" class="logo">
        CompanyLogo
      </a>
      <div class="header-right">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#contact">Log In</a>
        <a href="#contact">Detect</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Header;
