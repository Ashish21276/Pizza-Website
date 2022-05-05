import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  flag: JSON.parse(localStorage.getItem("mode")),
  forDark: { backgroundColor: "black", color: "white" },
};

const mode = createReducer(initialState, {
  setMode: (state) => {
    state.initialState.flag = state.initialState.flag ? false : true;
    localStorage.setItem("mode", JSON.stringify(state.initialState.flag));
    return state.initialState.flag;
  },
});

export default mode;
