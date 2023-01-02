import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItem: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add,
  },
});

export const CartAction = CartSlice.actions;

export default CartSlice.reducer;
