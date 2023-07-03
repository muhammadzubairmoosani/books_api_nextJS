import { configureStore } from "@reduxjs/toolkit";
import bookListSlice from "./slice";

const store = configureStore({
  reducer: { bookListState: bookListSlice },
});

export default store;
