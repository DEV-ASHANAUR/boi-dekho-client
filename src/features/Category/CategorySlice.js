import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addCategory,
  getCategories,
  deleteCategory,
  editCategory,
} from "./CategoryApi";

const initialState = {
  categories: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: null,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const categories = await getCategories();
    return categories;
  }
);
export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (data) => {
    const category = await addCategory(data);
    return category;
  }
);

export const removeCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id) => {
    const category = await deleteCategory(id);
    return category;
  }
);

export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async ({ id, data }) => {
    const category = await editCategory({ id, data });
    return category;
  }
);

export const categorySlice = createSlice({
  name: "category",
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
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.categories = [];
        state.error = action.error?.message;
      })
      .addCase(createCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Category Created SuccessFully!";
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.categories = [];
        state.error = action.error?.message;
      })
      .addCase(removeCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Category Created SuccessFully!";
        state.categories = state.categories.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(removeCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.categories = [];
        state.error = action.error?.message;
      })
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Category Updated Successfully!";
        // Update the specific category in the state
        state.categories = state.categories.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.categories = [];
        state.error = action.error?.message;
      });
  },
});
export const { resetState } = categorySlice.actions;

export default categorySlice.reducer;
