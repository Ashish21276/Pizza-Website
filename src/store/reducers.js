import { createReducer } from "@reduxjs/toolkit";

let initialData = {
  allPizza: [],
};

const pizzaMain = createReducer(initialData, {
  setData: (state, action) => {
    state.allPizza = action.payload;
  },
});

export default pizzaMain;
