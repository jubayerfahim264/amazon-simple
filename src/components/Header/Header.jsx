import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <img src={logo} alt="amazon-simple-logo" />
      </Link>
      <nav style={{ position: "sticky", top: 0, textAlign: "center" }}>
        <Link href="/shop">Shop</Link>
        <Link href="/review">Review Order</Link>
        <Link href="/manage">Manage Inventory</Link>
      </nav>
    </div>
  );
};

export default Header;
