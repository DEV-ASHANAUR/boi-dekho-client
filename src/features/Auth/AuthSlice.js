import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { registerUser,login } from './AuthApi';

const initialState = {
    currentUser: undefined,
    accessToken: undefined,
    isLoading: false,
    isError: false,
    error: ""
}

export const createUser = createAsyncThunk("auth/createUser", async (data) => {
    const user = await registerUser(data);
    return user;
})

export const loginUser = createAsyncThunk("auth/login", async (data) => {
    const user = await login(data);
    return user;
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedinIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.currentUser = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
            state.accessToken = undefined;
            localStorage.removeItem("auth");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.currentUser = action.payload.user;
                state.accessToken = action.payload.token;
                localStorage.setItem("auth", JSON.stringify({
                    accessToken: state.accessToken,
                    user: state.currentUser
                }));
                state.error = "";
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.currentUser = {};
                localStorage.removeItem("auth");
                state.error = action.error?.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.currentUser = action.payload.user;
                state.accessToken = action.payload.token;
                localStorage.setItem("auth", JSON.stringify({
                    accessToken: state.accessToken,
                    user: state.currentUser
                }));
                state.error = "";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.currentUser = {};
                localStorage.removeItem("auth");
                state.error = action.error?.message;
            })
    }
});
export const { userLoggedinIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;