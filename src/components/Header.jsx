import React, { useState } from "react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg"
          alt="logo"
          width="100px"
          height="100px"
        />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login" onClick={() => setLoginBtn("Logout")}>
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
