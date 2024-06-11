import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

// export interface CartState {
//   value: ProductInCart[];
// }

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.value = action.payload;
    },
    addProductToCart: (state, action) => {
      state.value.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      state.value = action.payload;
    },
    updateProductQuantityInCart: (state, action) => {
      state.value = action.payload;
    },
    // decrementProductInCart: (state, action) => {
    //   state.value = state.value.map((productInCart) =>
    //     productInCart.slug === action.payload.slug
    //       ? { ...productInCart, quantity: productInCart.quantity - 1 }
    //       : productInCart
    //   );
    // },
    // incrementProductInCart: (state, action) => {
    //   state.value = state.value.map((productInCart) =>
    //     productInCart.slug === action.payload.slug
    //       ? { ...productInCart, quantity: productInCart.quantity + 1 }
    //       : productInCart
    //   );
    // },
    removalAllFromCart: (state) => {
      state.value = initialState.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCart,
  addProductToCart,
  removeProductFromCart,
  updateProductQuantityInCart,
  decrementProductInCart,
  incrementProductInCart,
  removalAllFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
