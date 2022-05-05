import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Switch from "../other/Switch";

function Navbar() {
  const { cartItem } = useSelector((state) => state.cartReducer);
  const logedinUserData = useSelector((state) => state.loginUser);

  const logoutUser = () => {
    localStorage.removeItem("loginDetail");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded sticky-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Pizza Wala
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/cart"
                >
                  Cart <span>{cartItem.length}</span>
                </NavLink>
              </li>
              {Object.keys(logedinUserData).length === 0 ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {logedinUserData.name}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/orders">
                        My Orders
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/profile">
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={logoutUser}
                        href="/login"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              )}
              <Switch />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
