import { configureStore } from "@reduxjs/toolkit";
// import boardsReducer from "./features/boards/boardsSlice";
// import currentBoardReducer from "./features/boards/currentBoardSlice";
// import cardReducer from "./features/card/cardSlice";
import booksReducer from "./features/books/booksSlice";
import authReducer from "./features/auth/authSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    // boards: boardsReducer,
    // currentBoard: currentBoardReducer,
    // card: cardReducer,
    books: booksReducer,
    auth: authReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
