import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../../../lib/types";

// export interface WishlistState {
//   value: Book[];
// }

// const initialState: WishlistState = {
//   value: [],
// };

const initialState = {
  value: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.value = action.payload;
    },
    addOrderToOrders: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrders, addOrderToOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
