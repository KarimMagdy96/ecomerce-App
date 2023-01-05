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
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.CartItem.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.CartItem.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.CartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    deleteItems: (state, action) => {
      const id = action.payload;
      const existingItem = state.CartItem.find((item) => item.id === id);
      if (existingItem) {
        state.CartItem = state.CartItem.filter((item) => item.id != id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        state.totalAmount = state.CartItem.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        );
      }
    },
  },
});

export const CartAction = CartSlice.actions;

export default CartSlice.reducer;
