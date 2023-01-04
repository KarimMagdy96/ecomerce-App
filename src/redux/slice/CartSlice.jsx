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
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );
      console.log(state.totalQuantity);
      console.log(state.CartItem);
      console.log(newItem);
    },
    deleteItems: (state, action) => {
      const id = action.payload;
    },
  },
});

export const CartAction = CartSlice.actions;

export default CartSlice.reducer;
