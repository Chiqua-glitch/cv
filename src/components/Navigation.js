import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink
              to="/qui-suis-je"
              end
              className={(nav) => (nav.isActive ? "link-active" : "")}
            >
              Qui suis-je ?
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "link-active" : "")}
            >
              Résumé
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={(nav) => (nav.isActive ? "link-active" : "")}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="link-mobile">
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "link-active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
