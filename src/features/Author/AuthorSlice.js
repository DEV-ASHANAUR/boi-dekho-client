import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getAuthor} from './AuthorApi';

const initialState = {
    authors: [],
    isLoading: false,
    isError: false,
    error: ""
}

export const fetchAuthors = createAsyncThunk("author/fetchAuthor",async()=>{
    const author = await getAuthor();
    return author;
})

export const authorSlice = createSlice({
    name:"author",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchAuthors.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchAuthors.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.authors = action.payload;
        })
        .addCase(fetchAuthors.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.authors = [];
            state.error = action.error?.message;
        })
    }
});

export default authorSlice.reducer;