import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Book } from "../types";
import { getBooks } from "./thunk";

export const initialState: Book = {
  books: null,
  loading: false,
  error: null,
};

const bookListSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default bookListSlice.reducer;
