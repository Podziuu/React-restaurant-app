import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        showCart: false
    },
    reducers: {
        showCart(state,action) {

        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice;