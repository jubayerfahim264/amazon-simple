import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src={logo} alt="amazon-simple-logo" />
      </a>
      <nav style={{ position: "sticky", top: 0, textAlign: "center" }}>
        <a href="/shop">Shop</a>
        <a href="/review">Review Order</a>
        <a href="/manage">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
