import { createSlice } from "@reduxjs/toolkit";

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
      // @ts-expect-error - to fix
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrders, addOrderToOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
