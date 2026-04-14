import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="amazon-simple-logo" />
      <nav style={{ position: "sticky", top: 0 }}>
        <a href="/shop">Shop</a>
        <a href="/review">Review Order</a>
        <a href="/manage">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
