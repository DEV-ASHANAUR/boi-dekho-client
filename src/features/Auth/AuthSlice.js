import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { registerUser,login,googleUser } from './AuthApi';

const initialState = {
    currentUser: undefined,
    accessToken: undefined,
    isLoading: false,
    isSuccess:false,
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

// export const updateUser = createAsyncThunk("auth/update", async (data) => {
//     const user = await update(data);
//     return user;
// })

export const googleProvider = createAsyncThunk("auth/google", async (data) => {
    const user = await googleUser(data);
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
            state.currentUser = undefined;
            localStorage.removeItem("auth");
        },
        updateAvater: (state,action) => {
            state.currentUser.avater = action.payload;
            localStorage.setItem("auth", JSON.stringify({
                accessToken: state.accessToken,
                user: state.currentUser
            }));
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
                state.currentUser = action.payload;
                state.accessToken = undefined;
                state.isSuccess = true;
                state.error = "";
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
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
            .addCase(googleProvider.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(googleProvider.fulfilled, (state, action) => {
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
            .addCase(googleProvider.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.currentUser = {};
                localStorage.removeItem("auth");
                state.error = action.error?.message;
            })
    }
});
export const { userLoggedinIn, userLoggedOut,updateAvater } = authSlice.actions;
export default authSlice.reducer;