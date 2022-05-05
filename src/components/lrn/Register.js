import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Error from "../other/Error";
import Sucess from "../other/Sucess";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [message, setMessage] = useState("");

  const [registerData, setRegisterData] = useState({
    email: "",
    name: "",
    password: "",
    cpassword: "",
    mobile: "",
  });

  const handleOnChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { password, cpassword } = registerData;

    if (password !== cpassword) {
      setError(true);
      setMessage("Password MisMatch");
    } else {
      await fetch("http://localhost:5555/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      setSucess(true);
      setError(false);
      setMessage("User Registerd Sucessfully");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <>
      <div className="mt-5 shadow p-3 mb-5 bg-body rounded mx-auto w-75 text-center">
        {error && <Error error={message} />}
        {sucess && <Sucess message={message} />}
        <h1 className="text-center my-3">Register</h1>
        <div className="row justify-content-center mt-5">
          <div className="col-5">
            <form onSubmit={handleOnSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  required
                  value={registerData.name}
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  required
                  value={registerData.email}
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="form-control"
                  required
                  value={registerData.mobile}
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
                  value={registerData.password}
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="cpassword"
                  className="form-control"
                  required
                  value={registerData.cpassword}
                  onChange={handleOnChange}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary my-3">
                  Submit
                </button>
              </div>
              <NavLink to="/login">Click Here to Login</NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
