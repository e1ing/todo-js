import React from "react";
import classes from "./Navbar.module.css";
import { NavLink, Outlet} from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.navbar__links}>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};
