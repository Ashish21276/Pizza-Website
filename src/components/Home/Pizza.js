import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Spinner from "../other/Spinner";

function Pizza() {
  const dispatch = useDispatch();
  const { allPizza } = useSelector((state) => state.pizzaMain);
  const [loading, setLoading] = useState(true);

  const getPizzaData = async () => {
    const res = await fetch("http://localhost:5555/findallpizza", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    dispatch({
      type: "setData",
      payload: json,
    });

    setLoading(false);
  };

  useEffect(
    () => {
      getPizzaData();
      let arr = JSON.parse(localStorage.getItem("cartItem"));

      if (arr === null) {
        arr = [];
      }
      dispatch({
        type: "setFirstTime",
        payload: arr,
      });
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <h1 className="text-center my-5">Pizza Wala</h1>
          <div className="row ">
            {allPizza.map((i, key) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"
                  key={key}
                >
                  <Card data={i} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Pizza;
