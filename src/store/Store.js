import { configureStore } from "@reduxjs/toolkit";
import pizzaMain from "./reducers";
import cartReducer from "./cartReducer";
import loginUser from "./LoginReducer";
import mode from "./Mode";
import OrderedPizza from "./OrderReduces";

const store = configureStore({
  reducer: {
    pizzaMain,
    cartReducer,
    mode,
    loginUser,
    OrderedPizza,
  },
});

export default store;
