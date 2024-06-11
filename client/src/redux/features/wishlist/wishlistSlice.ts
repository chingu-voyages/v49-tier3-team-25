import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductInCart } from "../../../interfaces";

// export interface CartState {
//   value: ProductInCart[];
// }

// const initialState: CartState = {
//   value: [],
// };

const initialState = {
  value: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlist: (state, action) => {
      state.value = action.payload;
    },
    addBookToWishlist: (state, action) => {
      state.value.push(action.payload);
    },
    removeBookFromWishlist: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWishlist, addBookToWishlist, removeBookFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
