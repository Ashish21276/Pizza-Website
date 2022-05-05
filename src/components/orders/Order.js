import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderCard from "./OrderCard";

const Order = () => {
  const dispatch = useDispatch();
  const logedinUserData = useSelector((state) => state.loginUser);
  const { myOrders } = useSelector((state) => state.OrderedPizza);

  const getOrderedPizzaData = async () => {
    const res = await fetch("http://localhost:5555/orderedPizza", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: logedinUserData._id }),
    });
    const json = await res.json();

    dispatch({
      type: "setOrderedPizza",
      payload: json,
    });
  };

  useEffect(
    () => {
      getOrderedPizzaData();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <div>
        <div className="container">
          <h1 className="text-center mb-4">My Orders</h1>
          {myOrders.map((data, key) => {
            return (
              <div className="row shadow p-3 mb-5 bg-body rounded">
                <OrderCard data={data} key={key} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Order;
