import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setAllBooks: (state, action) => {
      state.value = action.payload;
    },
    addBookToBooks: (state, action) => {
      // @ts-expect-error - to fix
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllBooks, addBookToBooks } = booksSlice.actions;

export default booksSlice.reducer;
