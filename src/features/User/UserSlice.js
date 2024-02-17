import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteUser, editUser, getUsers } from "./userApi";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: null,
  error: null,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const user = await getUsers();
  return user;
});

export const removeUser = createAsyncThunk("user/removeUser", async (id) => {
  const user = await deleteUser(id);
  return user;
});

export const updateUser = createAsyncThunk(
  "author/updateAuthor",
  async ({ id, data }) => {
    const user = await editUser({ id, data });
    return user;
  }
);

export const userSlice = createSlice({
  name: "user",
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
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.users = [];
        state.error = action.error?.message;
      })

      .addCase(removeUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "User Deleted SuccessFully!";
        state.users = state.users.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.users = [];
        state.error = action.error?.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "User Updated Successfully!";
        // Update the specific category in the state
        state.users = state.users.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.users = [];
        state.error = action.error?.message;
      });
  },
});
export const { resetState } = userSlice.actions;
export default userSlice.reducer;
