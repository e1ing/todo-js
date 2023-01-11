import React from "react";
import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__links}>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};
