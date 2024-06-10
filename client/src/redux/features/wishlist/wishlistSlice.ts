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
    // addBookToWishlist: (state, action) => {
    //   state.value.push(action.payload);
    // },
    // addProductToCart: (state, action: PayloadAction<ProductInCart>) => {
    //   state.value.push(action.payload);
    // },
    // updateProductQuantityInCart: (
    //   state,
    //   action: PayloadAction<ProductInCart[]>
    // ) => {
    //   state.value = action.payload;
    // },
    // decrementProductInCart: (state, action: PayloadAction<ProductInCart>) => {
    //   state.value = state.value.map((productInCart) =>
    //     productInCart.slug === action.payload.slug
    //       ? { ...productInCart, quantity: productInCart.quantity - 1 }
    //       : productInCart
    //   );
    // },
    // incrementProductInCart: (state, action: PayloadAction<ProductInCart>) => {
    //   state.value = state.value.map((productInCart) =>
    //     productInCart.slug === action.payload.slug
    //       ? { ...productInCart, quantity: productInCart.quantity + 1 }
    //       : productInCart
    //   );
    // },
    // removalAllFromCart: (state) => {
    //   state.value = initialState.value;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  //   addProductToCart,
  //   updateProductQuantityInCart,
  //   decrementProductInCart,
  //   incrementProductInCart,
  //   removalAllFromCart,
  setWishlist,
  addBookToWishlist,
  removeBookFromWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
