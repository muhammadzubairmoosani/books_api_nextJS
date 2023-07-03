import { createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "../types";

export const getBooks = createAsyncThunk<Book[], void>(
  "book/getBooks",
  async () => {
    try {
      const jsonResponse = await fetch("api/get-books");
      if (!jsonResponse.ok) throw new Error(jsonResponse.statusText);

      const { data } = await jsonResponse.json();
      return data as Book[];
    } catch (error: any) {
      throw new Error(error.message || "An error occurred");
    }
  }
);
