import { createReducer } from "@reduxjs/toolkit";

let logedinUserData = localStorage.getItem("loginDetail")
  ? JSON.parse(localStorage.getItem("loginDetail"))
  : {};

const loginUser = createReducer(logedinUserData, {
  setLoginData: (state, action) => {
    state.logedinUserData = action.payload;
    localStorage.setItem("loginDetail", JSON.stringify(state.logedinUserData));
  },
});

export default loginUser;
