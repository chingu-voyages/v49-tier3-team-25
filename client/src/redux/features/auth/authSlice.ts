import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token"); // deletes token from storage
      return initialState;
    },
    setCredentials: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;
