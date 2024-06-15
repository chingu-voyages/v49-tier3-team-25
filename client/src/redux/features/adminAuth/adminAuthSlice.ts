import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    fullName: "",
    email: "",
    token: "",
  },
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    adminLogout: () => {
      localStorage.removeItem("token"); // deletes token from storage
      return initialState;
    },
    setAdminCredentials: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { adminLogout, setAdminCredentials } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
