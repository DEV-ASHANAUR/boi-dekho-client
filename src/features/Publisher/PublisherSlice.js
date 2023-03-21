import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getPublisher} from './PublisherApi';

const initialState = {
    publishers: [],
    isLoading: false,
    isError: false,
    error: ""
}

export const fetchPublishers = createAsyncThunk("publisher/fetchPublisher",async()=>{
    const author = await getPublisher();
    return author;
})

export const PublisherSlice = createSlice({
    name:"publisher",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchPublishers.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchPublishers.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.publishers = action.payload;
        })
        .addCase(fetchPublishers.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.publishers = [];
            state.error = action.error?.message;
        })
    }
});

export default PublisherSlice.reducer;