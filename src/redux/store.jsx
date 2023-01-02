import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/CartSlice";

const store = configureStore({
  reducer: {
    Cart: CartSlice,
  },
});

export default store;
