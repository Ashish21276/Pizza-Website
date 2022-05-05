import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart() {
  const { cartItem } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  let overAll = 0;
  cartItem.map((item) => {
    return (overAll = overAll + item.totalPrice);
  });

  useEffect(
    () => {
      dispatch({
        type: "getDataFromLocalStorage",
      });
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <div className="container mb-5 pb-3">
        <h1 className="text-center">My Cart</h1>
        {cartItem.map((data, key) => {
          return <CartItem data={data} key={key} />;
        })}
      </div>
      <div className="fixed-bottom">
        <div className="container bg-light text-center py-3 d-flex align-items-center justify-content-center">
          <h3 className="mx-3">{`SubTotal = ${overAll}`}</h3>
          <Checkout total={overAll} />
        </div>
      </div>
    </>
  );
}

export default Cart;
