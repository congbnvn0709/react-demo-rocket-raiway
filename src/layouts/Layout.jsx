import React from "react";
import Home from "./Home";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="nav-bar">
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
