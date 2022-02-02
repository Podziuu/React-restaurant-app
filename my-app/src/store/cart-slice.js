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
      console.log(action.payload)
      state.totalQtc++;
      console.log(state.items)
      state.items.push({
        id: newItem.id,
        name: newItem.name,
        price: newItem.price,
        photo: newItem.photo,
        quantity: 1,
        totalPrice: newItem.price
      })
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;