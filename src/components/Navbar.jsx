import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <nav>
        <h1>
          <Link to="/">React Test</Link>
        </h1>
      </nav>
    </header>
  );
};

export default Navbar;
