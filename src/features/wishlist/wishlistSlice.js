import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addWishList, deleteWishList, getWishList } from "./wishlistapi";



const initialState = {
    listItem: {},
    isLoading: false,
    isError: false,
    success:false,
    error: ""
}

export const fetchhWishlist = createAsyncThunk("wishlist/fetchhwishlist",async(userId)=>{
    const wishlist = await getWishList(userId);
    return wishlist;
});

export const createhWishlist = createAsyncThunk("wishlist/createhWishlist",async(data)=>{
    const wishlist = await addWishList(data);
    return wishlist;
});

export const removeWishlist = createAsyncThunk("wishlist/removeWishlist",async({productId,userId})=>{
    const wishlist = await deleteWishList({productId,userId});
    return wishlist;
});

export const wishlistSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.success = false;
            state.isError = false;
            state.error = "";
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchhWishlist.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchhWishlist.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.listItem = action.payload;
        })
        .addCase(fetchhWishlist.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.listItem = [];
            state.error = action.error?.message;
        })

        builder.addCase(createhWishlist.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
            state.success = false;
        })
        .addCase(createhWishlist.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.success = true;
        })
        .addCase(createhWishlist.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.success = false;
            state.error = action.error?.message;
        })

        builder.addCase(removeWishlist.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
            state.success = false;
        })
        .addCase(removeWishlist.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.success = true;
        })
        .addCase(removeWishlist.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.success = false;
            state.error = action.error?.message;
        })
    }
});
export const { resetMessage } = wishlistSlice.actions;
export default wishlistSlice.reducer;