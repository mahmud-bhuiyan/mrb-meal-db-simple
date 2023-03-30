import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h3>mrb-mdbs</h3>
      <div className="links">
        <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/inventory">Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
