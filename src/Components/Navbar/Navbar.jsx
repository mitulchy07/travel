import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div>
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  to="/"
                  className={`menu-item ${
                    selectedMenuItem === "home" ? "text-red-600" : ""
                  }`}
                  onClick={() => handleMenuItemClick("home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/flight"
                  className={`menu-item ${
                    selectedMenuItem === "flight"
                      ? "text-red-600"
                      : "text-white"
                  }`}
                  onClick={() => handleMenuItemClick("flight")}
                >
                  Flight
                </Link>
              </li>
              <li>
                <Link
                  to="/hotel"
                  className={`menu-item ${
                    selectedMenuItem === "hotel" ? "text-red-600" : ""
                  }`}
                  onClick={() => handleMenuItemClick("hotel")}
                >
                  Hotel
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`menu-item ${
                    selectedMenuItem === "blog" ? "text-red-600" : ""
                  }`}
                  onClick={() => handleMenuItemClick("blog")}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className={`menu-item ${
              selectedMenuItem === "travel"
                ? "btn btn-ghost text-xl text-red-600"
                : "btn btn-ghost text-xl text-red-600"
            }`}
            onClick={() => handleMenuItemClick("travel")}
          >
            Travel
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/"
                className={`menu-item ${
                  selectedMenuItem === "home" ? "text-red-600" : "text-black"
                }`}
                onClick={() => handleMenuItemClick("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/flight"
                className={`menu-item ${
                  selectedMenuItem === "flight" ? "text-red-600" : "text-black"
                }`}
                onClick={() => handleMenuItemClick("flight")}
              >
                Flight
              </Link>
            </li>
            <li>
              <Link
                to="/hotel"
                className={`menu-item ${
                  selectedMenuItem === "hotel" ? "text-red-600" : "text-black"
                }`}
                onClick={() => handleMenuItemClick("hotel")}
              >
                Hotel
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`menu-item ${
                  selectedMenuItem === "blog" ? "text-red-600" : "text-black"
                }`}
                onClick={() => handleMenuItemClick("blog")}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/login"
            className={`menu-item ${
              selectedMenuItem === "login"
                ? "btn bg-red-600 text-white w-32"
                : "btn bg-red-600 text-white w-32"
            }`}
            onClick={() => handleMenuItemClick("login")}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
