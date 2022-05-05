import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Card(props) {
  const { name, varients, price, img, description, _id } = props.data;
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [quantity, setQuantity] = useState(1);
  const [varie, setVarie] = useState("Small");

  const dispatch = useDispatch();

  const addToCart = () => {
    const a = {
      name,
      varients,
      price,
      img,
      description,
      quantity,
      varie,
      _id,
    };
    dispatch({
      type: "setCartData",
      payload: a,
    });
  };

  return (
    <>
      <div
        className="card shadow-lg p-1 mb-5 bg-body rounded"
        style={{ width: "25rem" }}
      >
        <img
          src={img}
          className="card-img-top img-fluid"
          style={{ height: "300px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text">{description.slice(0, 105) + "..."}</p>
          <div className="d-flex justify-content-between mb-5 mt-2">
            <div className="text-center">
              <h5 className="">Varients :</h5>
              <select
                className="form-select"
                aria-label="Default select example"
                value={varie}
                onChange={(e) => {
                  setVarie(e.target.value);
                }}
              >
                {varients.map((i, key) => {
                  return (
                    <option value={i} key={key}>
                      {i}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="text-center">
              <h5>Quantity :</h5>
              <select
                className="form-select"
                aria-label="Default select example"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              >
                {a.map((i, key) => {
                  return (
                    <option value={i} key={key}>
                      {i}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div
            className="d-flex justify-content-between align-items-center"
            // style={{ float: "right" }}
          >
            <h5>Price:{price[0][varie] * quantity}</h5>
            <button className="btn btn-primary" onClick={addToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
