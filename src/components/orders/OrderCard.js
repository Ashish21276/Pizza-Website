import React from "react";

const OrderCard = (props) => {
  const { orderItems, shippingAddress, orderAmount, createdAt, _id } =
    props.data;
  return (
    <>
      <div className="col-md-4">
        <h5>Items</h5>
        <div>
          {orderItems.map((data) => {
            return <p className="m-1">{data.name}</p>;
          })}
        </div>
      </div>
      <div className="col-md-4 ">
        <h5>Address</h5>
        <div >
          <p className="m-1">Street : {shippingAddress.street}</p>
          <p className="m-1">City : {shippingAddress.city}</p>
          <p className="m-1">Country : {shippingAddress.country}</p>
          <p className="m-1">PinCode : {shippingAddress.pinCode}</p>
        </div>
      </div>
      <div className="col-md-4">
        <h5>Order Info</h5>
        <div>
          <p className="m-1">Order Amount : {orderAmount}</p>
          <p className="m-1">Date : {createdAt.slice(0, 10)}</p>
          <p className="m-1">TransactionId : {_id}</p>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
