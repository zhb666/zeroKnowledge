import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./index.scss";

// const imgItem = [
//   {
//     img: require("../../assets/images/LOGO.png").default,
//     name: "logo"
//   }
// ];

const Heater = () => {
  return (
    <div className="header">
      {/* logo */}
      <NavLink exact data-id="1" to="/">
        <img
          className="logo"
          src="//www.nervos.org/wp-content/uploads/2020/12/topbar-nervos-logo.svg"
          alt=""
        />
      </NavLink>

      {/* 导航栏 */}
      {/* <ul className="head-navbar">
        <li>
          <NavLink exact data-id="1" to="/">
            Home
          </NavLink>
        </li>
      </ul> */}
    </div>
  );
};

export default Heater;
