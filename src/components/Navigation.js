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
              className={(nav) => (nav.isActive ? "active-link" : "")}
            >
              Qui suis-je ?
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/" end
              className={(nav) => (nav.isActive ? "active-link" : "")}
            >
              Résumé
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={(nav) => (nav.isActive ? "active-linke" : "")}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="link-mobile">
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "active-link" : "")}
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
