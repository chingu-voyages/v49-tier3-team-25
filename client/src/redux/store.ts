import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/books/booksSlice";
import authReducer from "./features/auth/authSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    auth: authReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
