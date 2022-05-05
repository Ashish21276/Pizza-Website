import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CartItem(props) {
  let { name, img, totalPrice, quantity, price, varie, _id } = props.data;
  let [quant, setQuant] = useState(quantity);

  const dispatch = useDispatch();

  const increment = () => {
    if (quantity >= 9) {
      alert("You can buy up to 9 quantity only");
    } else {
      setQuant(++quant);

      dispatch({
        type: "setCartData",
        payload: {
          name,
          img,
          totalPrice,
          quantity: quantity + 1,
          price,
          varie,
          _id,
        },
      });
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuant(--quant);

      dispatch({
        type: "setCartData",
        payload: {
          name,
          img,
          totalPrice,
          quantity: quantity - 1,
          price,
          varie,
          _id,
        },
      });
    } else {
      deleteItem();
    }
  };

  const deleteItem = () => {
    dispatch({
      type: "deleteData",
      payload: _id,
    });
  };

  return (
    <>
      <div className="row shadow-sm p-1 my-3 my-auto">
        <div className="col-xs-4 col-md-2 text-center">
          <img src={img} className="img-fluid" alt="" />
        </div>
        <div className="col-xs-6 col-md-3 text-center my-auto">
          <h4>{name}</h4>
        </div>
        <div className="col-xs-4 col-md-2 text-center my-auto">
          <p>{`${quantity} x ${price[0][varie]} = ${totalPrice}`}</p>
        </div>
        <div className="col-xs-4 col-md-2 my-auto">
          <div className="d-flex align-items-center justify-content-center">
            <RemoveIcon onClick={decrement} />
            <p className="my-auto">&nbsp; {quant} &nbsp;</p>
            <AddIcon
              onClick={() => {
                increment();
              }}
            />
          </div>
        </div>
        <div
          className="col-xs-2 col-md-1 my-auto mx-auto text-center "
          style={{ cursor: "pointer" }}
        >
          <DeleteIcon
            className="pointer mx-auto"
            onClick={() => deleteItem()}
          />
        </div>
      </div>
    </>
  );
}

export default CartItem;
