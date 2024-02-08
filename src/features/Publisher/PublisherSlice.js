import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addPublishers, deletePublisher, editPublisher, getPublisher } from "./PublisherApi";

const initialState = {
  publishers: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: null,
  error: null,
};

export const fetchPublishers = createAsyncThunk(
  "publisher/fetchPublisher",
  async () => {
    const author = await getPublisher();
    return author;
  }
);

export const createPublisher = createAsyncThunk(
    "publisher/createPublisher",
    async (data) => {
      const publishers = await addPublishers(data);
      return publishers;
    }
  );
  
  export const removePublisher = createAsyncThunk(
    "publisher/removePublisher",
    async (id) => {
      const publisher = await deletePublisher(id);
      return publisher;
    }
  );
  
  export const updatePublisher = createAsyncThunk(
    "publisher/updatePublisher",
    async ({ id, data }) => {
      const publisher = await editPublisher({ id, data });
      return publisher;
    }
  );

export const PublisherSlice = createSlice({
  name: "publisher",
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
      .addCase(fetchPublishers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPublishers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.publishers = action.payload;
      })
      .addCase(fetchPublishers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.publishers = [];
        state.error = action.error?.message;
      }).addCase(createPublisher.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(createPublisher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Publisher Created SuccessFully!";
        state.publishers.push(action.payload);
      })
      .addCase(createPublisher.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.publishers = [];
        state.error = action.error?.message;
      })
      .addCase(removePublisher.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(removePublisher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Publisher Deleted SuccessFully!";
        state.publishers = state.publishers.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(removePublisher.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.publishers = [];
        state.error = action.error?.message;
      })
      .addCase(updatePublisher.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(updatePublisher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Publishers Updated Successfully!";
        // Update the specific publishers in the state
        state.publishers = state.publishers.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(updatePublisher.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.publishers = [];
        state.error = action.error?.message;
      });
  },
});

export const {resetState} = PublisherSlice.actions;
export default PublisherSlice.reducer;
