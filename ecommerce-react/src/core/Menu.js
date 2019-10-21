import React from "react";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul classname="nav nav-tabs bg-primary">
      <li classname="nav-item">
        <Link classname="nav-link" style={isActive(history, "/")} to="/">
          Home
        </Link>
      </li>
      <li classname="nav-item">
        <Link
          classname="nav-link"
          style={isActive(history, "/signin")}
          to="signin"
        >
          Signin
        </Link>
      </li>
      <li classname="nav-item">
        <Link
          classname="nav-link"
          style={isActive(history, "/signup")}
          to="signup"
        >
          signup
        </Link>
      </li>
    </ul>
  </div>
);

export default withRouter(Menu);
