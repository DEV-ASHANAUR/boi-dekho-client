import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addBook, deleteBook, editBook, getManagebooks } from "./BooksApi";

const initialState = {
  books: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: null,
  error: null,
};

export const fetchManageBooks = createAsyncThunk(
  "managebooks/fetchManageBooks",
  async () => {
    const books = await getManagebooks();
    return books;
  }
);
export const createBook = createAsyncThunk(
    "managebooks/createBook",
    async (data) => {
      const book = await addBook(data);
      return book;
    }
  );
  
  export const removeBook = createAsyncThunk(
    "managebooks/removeBook",
    async (id) => {
      const book = await deleteBook(id);
      return book;
    }
  );
  
  export const updateBook = createAsyncThunk(
    "managebooks/updateBook",
    async ({ id, data }) => {
      const book = await editBook({ id, data });
      return book;
    }
  );

export const manageBooksSlice = createSlice({
  name: "managebooks",
  initialState,
  reducers: {
    resetState(state) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchManageBooks.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchManageBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.books = action.payload;
      })
      .addCase(fetchManageBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.books = [];
        state.error = action.error?.message;
      }).addCase(createBook.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Book Created SuccessFully!";
        state.books.push(action.payload);
      })
      .addCase(createBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.books = [];
        state.error = "Something went wrong! please try again!";
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Book Deleted SuccessFully!";
        state.books = state.books.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.books = [];
        state.error = action.error?.message;
      })
      .addCase(updateBook.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Book Updated Successfully!";
        // Update the specific updateBook in the state
        state.books = state.books.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.books = [];
        state.error = action.error?.message;
      });
  },
});
export const {resetState} = manageBooksSlice.actions;
export default manageBooksSlice.reducer;
