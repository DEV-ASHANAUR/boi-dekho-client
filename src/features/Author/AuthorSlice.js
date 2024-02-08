import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addAuthor, deleteAuthor, editAuthor, getAuthor } from "./AuthorApi";

const initialState = {
  authors: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: null,
  error: null,
};

export const fetchAuthors = createAsyncThunk("author/fetchAuthor", async () => {
  const author = await getAuthor();
  return author;
});

export const createAuthor = createAsyncThunk(
  "author/createAuthor",
  async (data) => {
    const author = await addAuthor(data);
    return author;
  }
);

export const removeAuthor = createAsyncThunk(
  "author/removeAuthor",
  async (id) => {
    const author = await deleteAuthor(id);
    return author;
  }
);

export const updateAuthor = createAsyncThunk(
  "author/updateAuthor",
  async ({ id, data }) => {
    const author = await editAuthor({ id, data });
    return author;
  }
);

export const authorSlice = createSlice({
  name: "author",
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
      .addCase(fetchAuthors.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.authors = action.payload;
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.authors = [];
        state.error = action.error?.message;
      })
      .addCase(createAuthor.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(createAuthor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Author Created SuccessFully!";
        state.authors.push(action.payload);
      })
      .addCase(createAuthor.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.authors = [];
        state.error = action.error?.message;
      })
      .addCase(removeAuthor.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(removeAuthor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Author Deleted SuccessFully!";
        state.authors = state.authors.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(removeAuthor.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.authors = [];
        state.error = action.error?.message;
      })
      .addCase(updateAuthor.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(updateAuthor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Author Updated Successfully!";
        // Update the specific category in the state
        state.authors = state.authors.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(updateAuthor.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.authors = [];
        state.error = action.error?.message;
      });
  },
});
export const { resetState } = authorSlice.actions;
export default authorSlice.reducer;
