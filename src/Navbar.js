import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand">
        <NavLink to="/gyms">Gyms</NavLink>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <Link to="/signup" className="btn btn-success m-2 float-left">
              Signup
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/login" className="btn btn-success m-2 float-left">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Navbar);
