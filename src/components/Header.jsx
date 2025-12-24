import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img
          className="w-20 h-20 m-2"
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg"
          alt="logo"
          width="100px"
          height="100px"
        />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4 space-x-4 font-bold text-sm items-center">
          <li className="px-2">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-2 hover:text-yellow-600">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 hover:text-yellow-600">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 hover:text-yellow-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 hover:text-yellow-600">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-2 hover:text-yellow-600">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="border border-black p-2 rounded-md bg-yellow-600 "
            onClick={() => setLoginBtn("Logout")}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
