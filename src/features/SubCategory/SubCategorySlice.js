import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addSubCategory, deleteSubCategory, editSubCategory, getSubCategories } from "./SubCategoryApi";

const initialState = {
  subcategories: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: null,
  error: null,
};

export const fetchSubCategories = createAsyncThunk(
  "subcategories/fetchSubCategories",
  async () => {
    const subcategories = await getSubCategories();
    return subcategories;
  }
);
export const createSubCategory = createAsyncThunk(
    "subcategories/createSubCategory",
    async (data) => {
      const subcategory = await addSubCategory(data);
      return subcategory;
    }
  );

  export const removeSubCategory = createAsyncThunk(
    "subcategories/removeSubCategory",
    async (id) => {
      const Subcategory = await deleteSubCategory(id);
      return Subcategory;
    }
  );

  export const updateSubCategory = createAsyncThunk(
    "subcategories/updateSubCategory",
    async ({ id, data }) => {
      const Subcategory = await editSubCategory({ id, data });
      return Subcategory;
    }
  );

export const subCategorySlice = createSlice({
  name: "subCategory",
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
      .addCase(fetchSubCategories.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchSubCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.subcategories = action.payload;
      })
      .addCase(fetchSubCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.subcategories = [];
        state.error = action.error?.message;
      }).addCase(createSubCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(createSubCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Sub Category Created SuccessFully!";
        state.subcategories.push(action.payload);
      })
      .addCase(createSubCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.subcategories = [];
        state.error = action.error?.message;
      }).addCase(removeSubCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(removeSubCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Sub Category Deleted SuccessFully!";
        state.subcategories = state.subcategories.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(removeSubCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.subcategories = [];
        state.error = action.error?.message;
      }).addCase(updateSubCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(updateSubCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Sub Category Updated Successfully!";
        // Update the specific category in the state
        state.subcategories = state.subcategories.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(updateSubCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.subcategories = [];
        state.error = action.error?.message;
      });
  },
});
export const {resetState} = subCategorySlice.actions;
export default subCategorySlice.reducer;
