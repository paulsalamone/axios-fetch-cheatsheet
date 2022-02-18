// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <nav>
        <NavLink activeclassname="active" to="/">
          Tutorial
        </NavLink>

        <NavLink activeclassname="active" to="/code">
          Live Code Example
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
