import { createReducer } from "@reduxjs/toolkit";

let initialData = {
  cartItem: [],
};

const cartReducer = createReducer(initialData, {
  getDataFromLocalStorage: (state) => {
    state.cartItem = JSON.parse(localStorage.getItem("cartItem"))
      ? JSON.parse(localStorage.getItem("cartItem"))
      : [];
  },

  removeCartItems: (state) => {
    localStorage.removeItem("cartItem");
    state.cartItem = [];
  },

  setCartData: (state, action) => {
    let { name, img, varients, quantity, price, varie, _id } = action.payload;

    let newItem = {
      name,
      img,
      varients,
      quantity,
      price,
      totalPrice: quantity * price[0][varie],
      varie,
      _id,
    };

    const flag = state.cartItem.find((item) => {
      return item._id === _id;
    });

    if (flag) {
      state.cartItem = state.cartItem.map((item) => {
        return item._id === _id ? newItem : item;
      });
    } else {
      state.cartItem = [...state.cartItem, newItem];
    }

    localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
  },

  deleteData: (state, action) => {
    state.cartItem = state.cartItem.filter((item) => {
      return action.payload !== item._id;
    });

    localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
  },

  setFirstTime: (state, action) => {
    state.cartItem = action.payload;
  },
});

export default cartReducer;
