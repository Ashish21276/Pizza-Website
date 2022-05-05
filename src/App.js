import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/lrn/Navbar";
import Pizza from "./components/Home/Pizza";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Login from "./components/lrn/Login";
import Register from "./components/lrn/Register";
import Order from "./components/orders/Order";
import Profile from "./components/lrn/Profile";
// import Error from "./components/Error";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
