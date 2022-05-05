import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Checkout = ({ total }) => {
  const { cartItem } = useSelector((state) => state.cartReducer);
  const logedinUserData = useSelector((state) => state.loginUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tokenHandler = async (token) => {
    const res = await fetch("http://localhost:5555/placeorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        total,
        token,
        cartItem,
        logedinUserData,
      }),
    });

    if (res.status === 200) {
      dispatch({
        type: "removeCartItems",
      });
      navigate("/orders");
    }
  };
  return (
    <>
      <StripeCheckout
        amount={total * 100}
        shippingAddress
        currency="INR"
        stripeKey="pk_test_51KsmMVSCyh8nHJMdjMKvF9VSNiRhNVFky252hdMtO7sI2yN4h56KKb4MLef8lJMpsknFQPFoEowDRv0s9IVbR4hJ00ImJrTkgQ"
        token={tokenHandler}
      >
        <button className="btn btn-success">PayNow</button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
