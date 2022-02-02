import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showCart: false,
  },
  reducers: {
    showCart(state, action) {
      state.showCart = true;
    },
    closeCart(state) {
        state.showCart = false;
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
