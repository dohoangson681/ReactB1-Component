import React, { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className=" myNavbar">
        <nav className="container navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand text-white" href="#">
          Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
