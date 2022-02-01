import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQtc: 0,
  },
  reducers: {
    addItemToCard(state, action) {
      const newItem = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;