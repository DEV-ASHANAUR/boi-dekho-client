import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getReview,createReview} from './reviewApi';

const initialState = {
    reviews: [],
    isFetchLoading: false,
    isCreateLoading: false,
    isError: false,
    isSuccess: false,
    successMessage: null,
    error: ""
}

export const fetchReview = createAsyncThunk("review/fetchReview",async(id)=>{
    const review = await getReview(id);
    return review;
})
export const saveReview = createAsyncThunk("review/saveReview",async(data)=>{
    const review = await createReview(data);
    return review;
})


export const reviewSlice = createSlice({
    name:"review",
    initialState,
    reducers: {
        clearSuccessMessage: state => {
          state.successMessage = null;
          state.isSuccess = false;
          state.isError = false;
          state.error = "";
        },
      },
    extraReducers:(builder)=>{
        builder.addCase(saveReview.pending,(state)=>{
            state.isCreateLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.successMessage = null;
        })
        .addCase(saveReview.fulfilled,(state,action)=>{
            state.isCreateLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.reviews.push(action.payload);
            state.successMessage = "Thanks for Review!";
        })
        .addCase(saveReview.rejected,(state,action)=>{
            state.isCreateLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.reviews = [];
            state.error = action.error?.message;
            state.successMessage = null;
        })
        .addCase(fetchReview.pending,(state)=>{
            state.isFetchLoading = true;
            state.isError = false;
        })
        .addCase(fetchReview.fulfilled,(state,action)=>{
            state.isFetchLoading = false;
            state.isError = false;
            state.reviews = action.payload;
        })
        .addCase(fetchReview.rejected,(state,action)=>{
            state.isFetchLoading = false;
            state.isError = true;
            state.reviews = [];
            state.error = action.error?.message;
        })
    }
});
export const { clearSuccessMessage } = reviewSlice.actions;
export default reviewSlice.reducer;