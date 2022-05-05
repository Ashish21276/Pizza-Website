import { createReducer } from "@reduxjs/toolkit";

let initialData = {
  myOrders: [],
};

const OrderedPizza = createReducer(initialData, {
  setOrderedPizza: (state, action) => {
    state.myOrders =  action.payload;
  },
});

export default OrderedPizza;
