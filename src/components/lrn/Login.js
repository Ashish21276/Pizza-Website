import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Sucess from "../other/Sucess";
import Error from "../other/Error";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [message, setMessage] = useState("");

  // useEffect(
  //   () => {
  //     if (localStorage.getItem("loginDetail")) {
  //       navigate("/");
  //     }
  //   },
  //   // eslint-disable-next-line
  //   []
  // );

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5555/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (res.status === 200) {
      const json = await res.json();

      dispatch({
        type: "setLoginData",
        payload: json,
      });

      setSucess(true);
      setError(false);
      setMessage("User Logedin SucessFully");

      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 2000);
    } else {
      setError(true);
      setSucess(false);
      setMessage("Invalid email or password");
    }
  };

  return (
    <>
      <div className="mt-5 shadow-lg p-3 mb-5 bg-body rounded w-75 text-center mx-auto">
        {sucess && <Sucess message={message} />}
        {error && <Error message={message} />}
        <h1 className="text-center my-3">Login</h1>
        <div className="row justify-content-center mt-5">
          <div className="col-5">
            <form onSubmit={handleOnSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  required
                  value={loginData.email}
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="form-control"
                  required
                  value={loginData.name}
                  onChange={handleOnChange}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary my-3">
                  Submit
                </button>
              </div>
            </form>
            <NavLink to="/register">Click Here to Register</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
